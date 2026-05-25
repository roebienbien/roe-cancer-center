import { Request, Response, NextFunction } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { AuthJwtPayload } from "../types/express";
import { createError } from "../utils/app-error";
import { asyncHandler } from "../utils/async-handler";

const validRoles: Role[] = ["ADMIN", "DOCTOR", "NURSE", "PATIENT"];
// const validRoles: Role = Object.values(Role) as Role[];

export const authenticate = asyncHandler(
  // async (req: Request, _: Response, next: NextFunction) => {
  async (req, _, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
      throw createError("Authentication failed", 401);
    }

    const decoded = jwt.verify(token, config.key.public, {
      algorithms: ["RS256"],
    }) as AuthJwtPayload;

    if (typeof decoded.userId !== "string") {
      throw createError("Authentication Failed: Invalid payload", 403);
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  },
);
