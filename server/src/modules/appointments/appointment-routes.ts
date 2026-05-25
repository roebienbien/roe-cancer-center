import express, { Response, Request } from "express";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import * as appointmentController from "./appointment-controller";
import { Role } from "@prisma/client";
import { requireUser } from "../../middleware/require-user";
import { getAppointmentsByUserId } from "./appointment-service";
import { sendSuccess } from "../../utils/response-handler";
import { validateResource } from "../../middleware/validate";
import {
  createAppointmentSchema,
  updateAppointmentStatusSchema,
} from "./appointment-schema";

const router = express.Router();

router.post(
  "/",
  // FIX
  authenticate,
  authorize(Role.ADMIN, Role.PATIENT),
  validateResource(createAppointmentSchema),
  appointmentController.createAppointment,
);
router.get("/", appointmentController.getAllAppointments);
router.get("/me", appointmentController.getMyAppointments);

router.get("/:id", appointmentController.getAppointmentById);
// router.patch(
//   "/:id/status",
//   validateResource(updateAppointmentStatusSchema),
//   authenticate,
//   authorize("DOCTOR"),
//   appointmentController.updateAppointmentStatus,
// );

export default router;
