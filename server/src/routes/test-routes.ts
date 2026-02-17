// src/routes/test.routes.ts
//

import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

// Public route (anyone can access)
router.get("/public", (req, res) => {
  res.json({ message: "This route is public for everyone!" });
});

// Admin-only route
router.get("/admin-only", authenticate, authorize("ADMIN"), (req, res) => {
  res.json({ message: `Hello Admin! Your role is ${req.user?.role}` });
});

// Doctor-only route
router.get("/doctor-only", authenticate, authorize("DOCTOR"), (req, res) => {
  res.json({ message: `Hello Doctor! Your role is ${req.user?.role}` });
});

// Patient-only route
router.get("/patient-only", authenticate, authorize("PATIENT"), (req, res) => {
  res.json({ message: `Hello Patient! Your role is ${req.user?.role}` });
});

// Multi-role route
router.get(
  "/doctor-or-admin",
  authenticate,
  authorize("ADMIN", "DOCTOR"),
  (req, res) => {
    res.json({ message: `Hello ${req.user?.role}! You have access.` });
  },
);

export default router;
