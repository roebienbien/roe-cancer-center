import express from "express";
import * as slotController from "./slot-controller";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";

const router = express.Router();

router.post("/", authenticate, authorize("DOCTOR"), slotController.createSlot);
router.get("/test", () => console.log("Hello"));

export default router;
