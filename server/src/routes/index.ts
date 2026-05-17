import { Router } from "express";
import userRoutes from "../modules/users/user-routes";
import authRoutes from "../modules/auth/auth-routes";
import bookRoutes from "../modules/appointments/appointment-routes";
import patientRoutes from "../modules/patients/patient-routes";
import doctorRoutes from "../modules/doctors/doctor-routes";
import { NextFunction } from "express";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/appointments", bookRoutes);

router.get("/test-error", () => {
  throw new Error("something broke");
});

router.get("/api/test-operational", (next: NextFunction) => {
  const err = {
    message: "Email already exists",
    statusCode: 400,
    isOperational: true,
    errors: { email: "taken" },
  };

  next(err);
});

export default router;
