import { asyncHandler } from "../../utils/async-handler";
import { sendError, sendSuccess } from "../../utils/response-handler";
import authService from "./auth-service";
import { Request, Response } from "express";
import { createAccessToken, createRefreshToken } from "./auth-utils";
import config from "../../config/"
import { createError } from "../../utils/app-error";
import jwt from 'jsonwebtoken'

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await authService.login(email, password);

  const accessToken = createAccessToken(user)
  const refreshToken = createRefreshToken(user)

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

  return sendSuccess(res, { data: { accessToken }, message: "login successful" })
});

export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    throw createError("No refresh token", 401);
  }

  let payload: any;

  try {
    payload = jwt.verify(token, config.key.public);
  } catch {
    throw createError("Invalid refresh token", 403);
  }

  const accessToken = createAccessToken(payload);

  return sendSuccess(res, { data: { accessToken } })
})

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("refreshToken");

  return sendSuccess(res, { data: "Logg", message: "hello" })
  // return sendSuccess(res, {
  //   message: "Logged out successfully",
  // });
}

// export const loginUser = asyncHandler(async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const token = await authService.login(email, password);
//
//   return sendSuccess(res, { data: { token }, message: "login successful", })
//   // return sendError(res, { errors: error, message: error.message })
// });

// try {
//   const { email, password } = req.body;
//   const token = await authService.login(email, password);
//   return sendSuccess(res, { data: { token }, message: "login successful", })
// } catch (error: any) {
//   return sendError(res, { errors: error, message: error.message })
// }
