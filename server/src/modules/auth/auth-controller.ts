import { sendError, sendSuccess } from "../../utils/response-handler";
import authService from "./auth-service";
import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    return sendSuccess(res, { data: { token }, message: "login successful", })
  } catch (error: any) {
    return sendError(res, { errors: error, message: error.message })
  }
};

export const authController = {
  loginUser,
};

export default authController;
