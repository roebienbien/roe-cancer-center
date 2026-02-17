import { Router } from "express";
import userController from "../controllers/user-controller";
import { validateResource } from "../middleware/validateResource";
import { createUserSchema } from "../schema/user-schema";
import authController from "../controllers/auth-controller";

const router = Router();

router.post("/login", authController.loginUser);

export default router;
