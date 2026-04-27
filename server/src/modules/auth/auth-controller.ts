import { sendError, sendSuccess } from "../../utils/response-handler";
import authService from "./auth-service";
import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    // return sendSuccess(res, { data: { token }, message: "login successful" })
    // return sendSuccess(res, { 200, "login succeessful", { token } })
    return sendSuccess(res, { data: { token }, message: "login successful", })
    // return res.status(200).json({ token });
  } catch (error: any) {
    return sendError(res, { errors: error, message: error.message })
    // res.status(401).json({ message: error.message });
  }
};

export const authController = {
  loginUser,
};

export default authController;
