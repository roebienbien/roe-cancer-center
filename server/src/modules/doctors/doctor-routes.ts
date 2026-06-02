import express from "express";
import { authenticate } from "../../middleware/authenticate";
import * as doctorController from "./doctor-controller";

const router = express.Router();

// router.get("/me", (req, res) => res.status(202),send("Hello"));
router.post("/me", authenticate, doctorController.createDoctor);
router.get("/", authenticate, doctorController.getAllDoctors);
router.get("/:id", authenticate, doctorController.getDoctorById);

export default router;
