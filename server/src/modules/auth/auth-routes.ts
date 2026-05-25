import { Router } from "express";
import * as authController from "./auth-controller";
import { validateResource } from "../../middleware/validate";
import { registerUserSchema } from "./auth-schema";

const router = Router();

router.post(
  "/register",
  validateResource(registerUserSchema),
  authController.registerUser,
);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.post("/refresh", authController.refreshToken);

export default router;
