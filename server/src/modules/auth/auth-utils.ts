import jwt from "jsonwebtoken";
import config from "../../config/";
import { AuthJwtPayload } from "../../types/auth";

export const createAccessToken = (user: any) => {
  // export const createAccessToken = (user: AuthJwtPayload) => {
  return jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    config.key.private,
    { algorithm: "RS256", expiresIn: "15m" },
  );
};

export const createRefreshToken = (user: any) => {
  return jwt.sign({ userId: user.id }, config.key.private, {
    algorithm: "RS256",
    expiresIn: "7d",
  });
};
