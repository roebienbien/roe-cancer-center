import { Router } from "express";
import userController from "../controllers/user-controller";
import { validateResource } from "../middleware/validateResource";
import { createUserSchema } from "../schema/user-schema";

const router = Router();

router.post("/", validateResource(createUserSchema), userController.createUser);
router.get("/", userController.getUsers);

export default router;
