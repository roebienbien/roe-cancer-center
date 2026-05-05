import { Router, Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { validateResource } from "../../middleware/validateResource";
import { createUserSchema } from "./user-schema";
import * as userController from "./user-controller";

const router = Router();

router.post("/", validateResource(createUserSchema), userController.createUser);
router.get("/", userController.getAllUsers);
// router.get("/", userController.getAllUsersHandler);

router.get("/test-admin", authenticate,
  authorize("PATIENT", "ADMIN"),
  (req: AuthRequest, res: Response) => {
    const role = req.user?.role;
    res.json({ message: ` You are ${role}` });
  }
);

router.get(
  "/appointments",
  async (_: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany({
        include: {
          appointments: true,
        },
      });

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);



// router.get("/:id", userController.getUserHandler);
router.delete("/:id", authenticate, authorize("ADMIN"), userController.deleteUser);

export default router;
