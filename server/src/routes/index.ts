import { Router } from "express";
import userRoutes from "./user-routes";
import authRoutes from "./auth-routes";
import testRoutes from "./test-routes";
import bookRoutes from "./booking-routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/bookings", bookRoutes);
router.use("/test", testRoutes);

export default router;
