import { Role } from "@prisma/client"

export interface AuthJwtPayload {
  userId: string;
  role: Role;
}


