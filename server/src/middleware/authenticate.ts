// middleware/authenticate.ts
import { Request, Response, NextFunction } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { AuthJwtPayload } from "../types/auth";

export interface AuthRequest extends Request {
  // user?: { userId: string; role: Role };
  user?: {
    userId: string;
    role: Role;
  }
}

const validRoles: Role[] = ["ADMIN", "DOCTOR", "NURSE", "PATIENT"];
export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: missing token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.key.public, {
      algorithms: ["RS256"],
    }) as AuthJwtPayload;

    // ✅ Validate payload shape
    if (
      typeof decoded.userId !== "string" ||
      !validRoles.includes(decoded.role as Role)
    ) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // ✅ Safe assignment
    req.user = {
      userId: decoded.userId,
      role: decoded.role as Role,
    };

    next();
  } catch (err) {
    console.log("JWT ERROR:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
