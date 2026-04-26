import { Router, Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { validateResource } from "../../middleware/validateResource";
import { createUserSchema } from "./user-schema";
import userController from "./user-controller";

const router = Router();

router.post(
  "/",
  validateResource(createUserSchema),
  userController.createUserHandler,
);
router.get("/", userController.getAllUsersHandler);
router.get("/test-admin", authenticate,
  authorize("PATIENT", "ADMIN"),
  (req: AuthRequest, res: Response) => {
    const role = req.user?.role;
    res.json({ message: ` You are ${role}` });
  }
);

router.get(
  "/book",
  async (_: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany({
        include: {
          bookings: true,
        },
      });

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);



router.get("/:id", userController.getUserHandler);
router.delete("/:id", userController.deleteUserHandler);

export default router;
