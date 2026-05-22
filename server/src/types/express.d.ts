import { Role } from "@prisma/client";

export interface AuthJwtPayload {
  userId: string;
  role: Role;
}

export interface UserParams {
  id: string;
}

// learn: for future generics
// export type Params<T extends string = "id"> = {
//   [K in T]: string;
// };

declare global {
  namespace Express {
    interface Request {
      user?: AuthJwtPayload;
    }
  }
}

export {};
