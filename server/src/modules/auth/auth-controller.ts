import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import * as authService from "./auth-service";
import { createAccessToken, createRefreshToken } from "./auth-utils";
import { createError } from "../../utils/app-error";
import config from "../../config/";
import jwt from "jsonwebtoken";
import {
  accessTokenCookieOptions,
  clearCookieOptions,
  refreshTokenECookieOptions,
} from "../../config/cookie-options";
import { AuthJwtPayload } from "../../types/express";
import { logger } from "../../utils/logger";
import { RegisterUserInput } from "./auth-schema";

export const registerUser = asyncHandler<{}, {}, RegisterUserInput>(
  async (req, res) => {
    const user = await authService.registerUser(req.body);
    logger.info({ userId: user.id, email: user.email }, "User created");

    return sendSuccess(res, {
      data: user,
      message: "User created successfully",
      statusCode: 201,
    });
  },
);

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { userId, role } = await authService.login(email, password);

  const jwtPayload: AuthJwtPayload = {
    userId: userId,
    role: role,
  };

  const accessToken = createAccessToken(jwtPayload);
  const refreshToken = createRefreshToken(jwtPayload);

  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenECookieOptions);

  return sendSuccess(res, {
    data: null,
    message: "login successful",
  });
});

export const refreshAccessToken = asyncHandler((req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    throw createError("No refresh token", 401);
  }

  let payload: AuthJwtPayload;

  try {
    payload = jwt.verify(token, config.key.public) as AuthJwtPayload;
  } catch {
    throw createError("Invalid refresh token", 403);
  }

  const accessToken = createAccessToken({
    userId: payload.userId,
    role: payload.role,
  });

  res.cookie("accessToken", accessToken, accessTokenCookieOptions);

  return sendSuccess(res, { data: null, message: "Token refreshed" });
});

export const logoutUser = asyncHandler((_, res) => {
  res.clearCookie("accessToken", clearCookieOptions);

  res.clearCookie("refreshToken", clearCookieOptions);

  return sendSuccess(res, { data: null, message: "Logout successful" });
});
