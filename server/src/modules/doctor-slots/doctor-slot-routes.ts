import express from "express";
import { authenticate } from "../../middleware/authenticate";
import { validateResource } from "../../middleware/validateResource";
import * as doctorSlotController from "./doctor-slot-controller";
import { assignDoctorSchema } from "./doctor-slot-schema";

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateResource(assignDoctorSchema),
  doctorSlotController.assignDoctorToSlot,
);
router.get("/", (req, res) => res.send("Hello"));

export default router;
