import authService from "../services/auth-service";
import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    return res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const authController = {
  loginUser,
};

export default authController;
