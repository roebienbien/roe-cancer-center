import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import authService from "./auth-service";
import { Request, Response } from "express";
import { createAccessToken, createRefreshToken } from "./auth-utils";
import { createError } from "../../utils/app-error";
import config from "../../config/";
import jwt from "jsonwebtoken";
import {
  accessTokenCookieOptions,
  clearCookieOptions,
  refreshTokenECookieOptions,
} from "../../config/cookie-options";
import { AuthJwtPayload } from "../../types/auth";

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await authService.login(email, password);

  const jwtPayload: AuthJwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = createAccessToken(jwtPayload);
  const refreshToken = createRefreshToken(jwtPayload);

  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenECookieOptions);

  console.log(req.cookies);

  return sendSuccess(res, {
    data: null,
    message: "login successful",
  });
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
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

    console.log(payload);

    res.cookie("accessToken", accessToken, accessTokenCookieOptions);

    return sendSuccess(res, { data: null, message: "Token refreshed" });
  },
);

export const logoutUser = asyncHandler((_: Request, res: Response) => {
  res.clearCookie("accessToken", clearCookieOptions);

  res.clearCookie("refreshToken", clearCookieOptions);

  return sendSuccess(res, { data: null, message: "Logout successful" });
});
