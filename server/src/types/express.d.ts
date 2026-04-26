// express.d.ts
declare global {
  namespace Express {
    interface User {
      userId: string;
      role: Role;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}
