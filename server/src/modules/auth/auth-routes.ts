import { Router } from "express";
import * as authController from "./auth-controller";

const router = Router();

router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.post("/refresh", authController.refreshToken);

export default router;
