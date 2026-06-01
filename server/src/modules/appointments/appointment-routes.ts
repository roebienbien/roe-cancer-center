import express from "express";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import * as appointmentController from "./appointment-controller";
import { Role } from "@prisma/client";
import { validateResource } from "../../middleware/validate-resource";
import { createAppointmentSchema } from "./appointment-schema";

const router = express.Router();

router.post(
  "/",
  // FIX
  authenticate,
  authorize(Role.PATIENT),
  validateResource(createAppointmentSchema),
  appointmentController.createAppointment,
);
router.get("/", appointmentController.getAllAppointments);
router.get(
  "/me",
  authenticate,
  authorize(Role.PATIENT),
  appointmentController.getMyAppointments,
);

router.get("/:id", appointmentController.getAppointmentById);

// router.patch(
//   "/:id/status",
//   validateResource(updateAppointmentStatusSchema),
//   authenticate,
//   authorize("DOCTOR"),
//   appointmentController.updateAppointmentStatus,
// );

// router.delete("/:id");

export default router;
