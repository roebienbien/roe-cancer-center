import { Router } from "express";
import userRoutes from "./user-routes";
import userController from "../controllers/user-controller";

const router = Router();

router.use("/users", userRoutes);

export default router;
