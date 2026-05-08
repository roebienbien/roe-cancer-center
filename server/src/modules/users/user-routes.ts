import { Router, Request, Response } from "express";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { validateResource } from "../../middleware/validateResource";
import { createUserSchema } from "./user-schema";
import * as userController from "./user-controller";

const router = Router();

router.post("/", validateResource(createUserSchema), userController.createUser);
router.get("/", authenticate, userController.getAllUsers);
// router.get("/", userController.getAllUsersHandler);

router.get(
  "/test-admin",
  authenticate,
  authorize("PATIENT", "ADMIN"),
  (req: AuthRequest, res: Response) => {
    const role = req.user?.role;
    res.json({ message: ` You are ${role}` });
  },
);

// router.get("/:id", userController.getUserHandler);
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  userController.deleteUser,
);

export default router;
