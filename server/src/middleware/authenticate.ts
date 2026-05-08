import { Request, Response, NextFunction } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { AuthJwtPayload } from "../types/auth";
import { sendError } from "../utils/response-handler";

export interface AuthRequest extends Request {
  // user?: { userId: string; role: Role };
  user?: {
    userId: string;
    role: Role;
  };
}

// const validRoles: Role[] = Object.values(Role).in
const validRoles: Role[] = ["ADMIN", "DOCTOR", "NURSE", "PATIENT"];

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  // const header = req.headers.authorization;

  // if (!header || !header.startsWith("Bearer ")) {
  //   return sendError(res, { message: "Authentication Failed: missing token", statusCode: 401 })
  // }
  // const token = header.split(" ")[1];

  const token = req.cookies?.accessToken;
  if (!token) {
    return sendError(res, {
      message: "Authentication failed",
      statusCode: 401,
    });
  }

  try {
    const decoded = jwt.verify(token, config.key.public, {
      algorithms: ["RS256"],
    }) as AuthJwtPayload;

    //  Validate payload shape
    if (
      typeof decoded.userId !== "string" ||
      !validRoles.includes(decoded.role as Role)
    ) {
      return sendError(res, {
        message: "Authentication Failed: Invalid token payload",
        statusCode: 403,
      });
    }

    //  Safe assignment
    req.user = {
      userId: decoded.userId,
      role: decoded.role as Role,
    };

    next();
  } catch (err) {
    console.log("JWT ERROR:", err);
    return sendError(res, {
      message: "Authentication Failed: Invalid or expired token",
      statusCode: 401,
    });
  }
};
