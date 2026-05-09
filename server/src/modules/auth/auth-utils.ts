import jwt from "jsonwebtoken";
import config from "../../config/";
import { AuthJwtPayload } from "../../types/auth";

export const createAccessToken = (payload: AuthJwtPayload) => {
  // export const createAccessToken = (user: AuthJwtPayload) => {
  return jwt.sign(
    {
      userId: payload.userId,
      role: payload.role,
    },
    config.key.private,
    { algorithm: "RS256", expiresIn: "10s" },
  );
};

export const createRefreshToken = (user: AuthJwtPayload) => {
  return jwt.sign(
    {
      userId: user.userId,
      role: user.role,
    },
    config.key.private,
    {
      algorithm: "RS256",
      expiresIn: "7d",
    },
  );
};
