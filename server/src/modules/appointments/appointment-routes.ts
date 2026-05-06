import express, { Response, Request } from "express";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { prisma } from "../../lib/prisma";
import * as appointmentController from "./appointment-controller";
import { Role } from "@prisma/client";
import { requireUser } from "../../utils/requireUser";
import { getAppointmentsByUserId } from "./appointment-service";
import { sendSuccess } from "../../utils/response-handler";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize(Role.ADMIN, Role.PATIENT),
  appointmentController.createAppointment,
);
router.get("/", appointmentController.getAllAppointments);

router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const { userId } = requireUser(req);

  const appointments = await getAppointmentsByUserId(userId);

  return sendSuccess(res, { data: appointments });
});
router.get("/:id", appointmentController.getAppointmentById);
router.patch(
  "/:id/status",
  authenticate,
  authorize("DOCTOR"),
  appointmentController.updateAppointmentStatus,
);

export default router;
