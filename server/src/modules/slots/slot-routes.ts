import express from "express";
import * as slotController from "./slot-controller";
import { authenticate } from "../../middleware/authenticate";
import { validateResource } from "../../middleware/validate-resource";
import { createSlotSchema } from "./slot-schema";

const router = express.Router();

router.post(
  "/",
  // authenticate,
  validateResource(createSlotSchema),
  slotController.createSlot,
);
router.get("/test", () => console.log("Hello"));

export default router;
