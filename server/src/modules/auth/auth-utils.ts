import jwt from "jsonwebtoken";
import config from "../../config/";
import { AuthJwtPayload } from "../../types/express";

const buildJwtPayload = (user: AuthJwtPayload) => ({
  userId: user.userId,
  role: user.role,
});

export const createAccessToken = (user: AuthJwtPayload) => {
  return jwt.sign(buildJwtPayload(user), config.key.private, {
    algorithm: "RS256",
    expiresIn: "1h",
  });
};

export const createRefreshToken = (user: AuthJwtPayload) => {
  return jwt.sign(buildJwtPayload(user), config.key.private, {
    algorithm: "RS256",
    expiresIn: "7d",
  });
};
