import express from "express";
import { authenticate } from "../../middleware/authenticate";
import * as doctorController from "./doctor-controller";

const router = express.Router();

// router.get("/me", (req, res) => res.status(202),send("Hello"));
router.post("/me", authenticate, doctorController.createDoctor);

export default router;
