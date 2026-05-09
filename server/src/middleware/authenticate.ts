import { Request, Response, NextFunction } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { AuthJwtPayload } from "../types/express";
import { createError } from "../utils/app-error";

const validRoles: Role[] = ["ADMIN", "DOCTOR", "NURSE", "PATIENT"];
// const validRoles: Role = Object.values(Role) as Role[];

export const authenticate = (req: Request, _: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;

  if (!token) {
    throw createError("Authentication failed", 401);
  }

  try {
    const decoded = jwt.verify(token, config.key.public, {
      algorithms: ["RS256"],
    }) as AuthJwtPayload;

    //  Validate payload shape
    if (
      typeof decoded.userId !== "string"
      // typeof decoded.userId !== "string" ||
      // !validRoles.includes(decoded.role as Role)
    ) {
      throw createError("Authentication Failed: Invalid payload", 403);
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (err) {
    console.log("JWT ERROR:", err);
    throw createError("Authentication Failed: Invalid or expired token");
  }
};
