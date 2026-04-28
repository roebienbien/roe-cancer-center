import { Request, Response } from "express";
import userService from "./user-service";
import { asyncHandler } from "../../utils/async-handler";
import { sendError, sendSuccess } from "../../utils/response-handler";

type Params = {
  id: string;
}

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  return sendSuccess(res,
    {
      data: user,
      message: "User created successfully",
      statusCode: 201
    })
})

// const createUserHandler = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.createUser(req.body);
//     return sendSuccess(res, { data: user, message: "User created successfully", statusCode: 201 });
//   } catch (error: any) {
//     // Check for Prisma unique constraint
//     if (error.code === "P2002" && error.meta?.target?.includes("email")) {
//       // return sendError(res, "Email already exists", 400);
//       return sendError(res, { message: "email already exists", statusCode: 400 })
//
//     }
//     return sendError(res, { message: error.message || "Internal server error" });
//   }
// };

export const getUser = asyncHandler(async (req: Request<Params>, res: Response) => {
  const users = await userService.getUserById(req.params.id);
  return sendSuccess(res, { data: users })
  // return sendSuccess(res, users);
});

export const deleteUser = asyncHandler(async (req: Request<Params>, res: Response) => {
  const users = await userService.deleteUser(req.params.id);
  return sendSuccess(res, { data: users });
  // return sendSuccess(res, users);
});

export const getAllUsers = asyncHandler(async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return sendSuccess(res, { data: users })
});

