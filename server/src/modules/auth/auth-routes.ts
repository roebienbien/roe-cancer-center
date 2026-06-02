import { Router } from "express";
import * as authController from "./auth-controller";
import { validateResource } from "../../middleware/validate-resource";
import { registerUserSchema } from "./auth-schema";
import { authenticate } from "../../middleware/authenticate";

const router = Router();

router.post(
  "/register",
  validateResource(registerUserSchema),
  authController.registerUser,
);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.get("/me", authenticate, authController.me);
router.post("/refresh", authController.refreshAccessToken);

export default router;
