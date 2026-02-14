import { Request, Response } from "express";
import userService from "../services/user-service";
import { asyncHandler } from "../utils/async-handler";
import { sendError, sendSuccess } from "../utils/response-handler";

const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    return sendSuccess(res, user, 201, "User created successfully");
  } catch (error: any) {
    // Check for Prisma unique constraint
    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return sendError(res, "Email already exists", 400);
    }

    return sendError(res, error.message || "Internal server error", 500);
  }
};

const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getUserById(Number(req.params.id));
  return sendSuccess(res, users);
});

const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.deleteUser(Number(req.params.id));
  return sendSuccess(res, users);
});

const getAllUsersHandler = asyncHandler(async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return sendSuccess(res, users);
});

const userController = {
  createUserHandler,
  getAllUsersHandler,
  getUserHandler,
  deleteUserHandler,
};

export default userController;
