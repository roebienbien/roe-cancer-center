import { CookieOptions } from "express";

const isProduction = process.env.NODE_ENV === "production";

export const accessTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  // secure: isProduction ,
  //sameSite: isProduction ? "none" : "lax",
  secure: false,
  sameSite: "lax",
  maxAge: 15 * 60 * 1000, //15m
};

export const refreshTokenECookieOptions: CookieOptions = {
  httpOnly: true,
  // secure: isProduction
  //sameSite: isProduction ? "none" : "lax",
  secure: false,
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, //7d
};

export const clearCookieOptions: CookieOptions = {
  httpOnly: true,
  // secure: isProduction
  //sameSite: isProduction ? "none" : "lax",
  secure: false,
  sameSite: "lax",
};
