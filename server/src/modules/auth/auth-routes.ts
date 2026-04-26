import { Router } from "express";
import userController from "../users/user-controller";
import { validateResource } from "../../middleware/validateResource";
import { createUserSchema } from "../users/user-schema";
import authController from "./auth-controller";

const router = Router();

router.post("/login", authController.loginUser);

export default router;
