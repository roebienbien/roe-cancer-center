import express from "express";
import { authenticate } from "../../middleware/authenticate";
import { validateResource } from "../../middleware/validate-resource";
import * as doctorSlotController from "./doctor-slot-controller";
import { assignDoctorToSlotSchema } from "./doctor-slot-schema";

const router = express.Router();

router.post(
  "/assign/:doctorId/:slotId",
  authenticate,
  validateResource(assignDoctorToSlotSchema),
  doctorSlotController.assignDoctorToSlot,
);

router.get(
  "/available",
  authenticate,
  doctorSlotController.getAvailableDoctorSlots,
);

router.get("/:id", authenticate, doctorSlotController.getDoctorSlotsById);
// router.get("/", (req, res) => res.send("Hello"));

export default router;
