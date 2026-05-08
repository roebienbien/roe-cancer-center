import { asyncHandler } from "../../utils/async-handler";
import { sendSuccess } from "../../utils/response-handler";
import authService from "./auth-service";
import { Request, Response } from "express";
import { createAccessToken, createRefreshToken } from "./auth-utils";

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await authService.login(email, password);

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  console.log(req.cookies);

  return sendSuccess(res, {
    data: null,
    message: "login successful",
  });
});

export const logoutUser = asyncHandler((_: Request, res: Response) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    secure: false,
    sameSite: "lax",
  });

  return sendSuccess(res, { data: null, message: "Logout successful" });
});

// export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
//   const token = req.cookies.refreshToken;
//
//   if (!token) {
//     throw createError("No refresh token", 401);
//   }
//
//   let payload: any;
//
//   try {
//     payload = jwt.verify(token, config.key.public);
//   } catch {
//     throw createError("Invalid refresh token", 403);
//   }
//
//   const accessToken = createAccessToken(payload);
//
//   return sendSuccess(res, { data: { accessToken } })
// })
//
