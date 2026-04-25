// src/middleware/authorize.ts
// My PEP
import { Request, NextFunction, Response } from 'express'
import { hasRole, Role } from "./authorization";

export const authorize = (...allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("USER IN REQUEST:", req.user);
    console.log("AUTH HEADER:", req.headers.authorization);
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    if (!hasRole(req.user.role, allowedRoles)) {
      return res.status(403).json({ message: "Forbidden" })
    }

    next();
  }
}


// import { Response, NextFunction } from "express";
// import { AuthRequest } from "./authenticate"; // <-- import your extended interface
//
// export const authorize = (...allowedRoles: string[]) => {
//   return (req: AuthRequest, res: Response, next: NextFunction) => {
//     const userRole = req.user?.role; // ✅ TypeScript knows user exists
//
//     if (!userRole) {
//       return res.status(401).json({ message: "Unauthorized: no user role" });
//     }
//
//     if (!allowedRoles.includes(userRole)) {
//       return res
//         .status(403)
//         .json({ message: "Forbidden: insufficient permissions" });
//     }
//
//     next();
//   };
// };
