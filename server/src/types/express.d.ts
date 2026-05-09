import { AuthJwtPayload } from "./auth";
import { Role } from "@prisma/client";

export interface AuthJwtPayload {
  userId: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthJwtPayload;
    }
  }
}

export {};
