import express from "express";
import { authenticate } from "../../middleware/authenticate";
import * as doctorController from "./doctor-controller";
import { authorize } from "../../middleware/authorize";
import { validateResource } from "../../middleware/validate-resource";
import { registerDoctorSchema, verifyDoctorSchema } from "./doctor-schema";

const router = express.Router();

// router.get("/me", (req, res) => res.status(202),send("Hello"));
router.post(
  "/me",
  validateResource(registerDoctorSchema),
  authenticate,
  doctorController.registerDoctor,
);
router.get("/", authenticate, doctorController.getAllDoctors);
router.get("/:id", authenticate, doctorController.getDoctorById);
router.patch(
  "/:doctorId/verify",
  authenticate,
  // authorize("ADMIN"),
  validateResource(verifyDoctorSchema),
  doctorController.verifyDoctor,
);

export default router;
