// src/middleware/authorize.ts
// My PEP
import { NextFunction, Response } from 'express'
import { hasRole, Role } from "./authorization";
import { AuthRequest } from './authenticate';
import { sendError } from '../utils/response-handler';

export const authorize = (...allowedRoles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, { message: "Authentication required", statusCode: 401 })

    }

    if (!hasRole(req.user.role, allowedRoles)) {
      return sendError(res, { message: "Authorization: Forbidden", statusCode: 403 })
    }

    next();
  }
}
