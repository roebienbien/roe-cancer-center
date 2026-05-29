// My PEP
import { Request, Response, NextFunction } from "express";
import { createError } from "../utils/app-error";
import { Role } from "@prisma/client";
import { asyncHandler } from "../utils/async-handler";

const hasRole = (role: Role, allowedRoles: Role[]): boolean => {
  return role === "ADMIN" || allowedRoles.includes(role);
};

export const authorize = (...allowedRoles: Role[]) => {
  return asyncHandler(async (req, _, next) => {
    if (!req.user) {
      throw createError("Authentication required", 401);
    }

    if (!hasRole(req.user.role, allowedRoles)) {
      throw createError("Authorization: Forbidden", 403);
    }

    next();
  });
};
