import { Router } from "express";
import userRoutes from "../modules/users/user-routes";
import authRoutes from "../modules/auth/auth-routes";
import testRoutes from "./test-routes";
import bookRoutes from "../modules/bookings/booking-routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/bookings", bookRoutes);
router.use("/test", testRoutes);

export default router;
