import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { validateResource } from "../../middleware/validate-resource";
import { createUserSchema } from "./user-schema";
import * as userController from "./user-controller";

const router = Router();

//router.post("/", validateResource(createUserSchema), userController.createUser);
router.get("/", authenticate, userController.getAllUsers);

// auth/me is better
// router.get("/me", authenticate, userController.getMyProfile);
//
router.get("/:id", authenticate, userController.getUserById);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  userController.deactivateUser,
);

export default router;
