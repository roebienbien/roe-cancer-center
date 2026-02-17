// src/middleware/authorize.ts
import { Response, NextFunction } from "express";
import { AuthRequest } from "./authenticate"; // <-- import your extended interface

export const authorize = (...allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role; // ✅ TypeScript knows user exists

    if (!userRole) {
      return res.status(401).json({ message: "Unauthorized: no user role" });
    }

    if (!allowedRoles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient permissions" });
    }

    next();
  };
};
