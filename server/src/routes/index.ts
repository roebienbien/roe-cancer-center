import { Router } from "express";
import userRoutes from "../modules/users/user-routes";
import authRoutes from "../modules/auth/auth-routes";
import bookRoutes from "../modules/appointments/appointment-routes";
import patientRoutes from "../modules/patients/patient-routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);
router.use("/appointments", bookRoutes);

export default router;
