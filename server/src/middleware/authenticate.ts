import { Request, Response, NextFunction } from "express";
import config from "../config";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { userId: string; role: string };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Unauthorized user" });

  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, config.key.public, {
      algorithms: ["RS256"],
    }) as { userId: string; role: string };
    req.user = payload; // ✅ runtime assignment
    console.log(payload);
    console.log("authenticated user: ", req.user);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
