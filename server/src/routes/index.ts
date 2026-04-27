import { Router } from "express";
import userRoutes from "../modules/users/user-routes";
import authRoutes from "../modules/auth/auth-routes";
import bookRoutes from "../modules/bookings/booking-routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/bookings", bookRoutes);

export default router;
