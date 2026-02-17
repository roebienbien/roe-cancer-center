import { Router } from "express";
import userRoutes from "./user-routes";
import authRoutes from "./auth-routes";
import testRoutes from "./test-routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/test", testRoutes);

export default router;
