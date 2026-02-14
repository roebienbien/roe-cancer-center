import { Router } from "express";
import userController from "../controllers/user-controller";
import { validateResource } from "../middleware/validateResource";
import { createUserSchema } from "../schema/user-schema";

const router = Router();

router.post(
  "/",
  validateResource(createUserSchema),
  userController.createUserHandler,
);
router.get("/", userController.getAllUsersHandler);
router.get("/:id", userController.getUserHandler);
router.delete("/:id", userController.deleteUserHandler);

export default router;
