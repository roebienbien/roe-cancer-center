import express, { Response, Request } from "express";
import { authenticate } from "../../middleware/authenticate";
import { requireUser } from "../../middleware/require-user";
import { getPatientByUserId } from "./patient-service";
import { sendSuccess } from "../../utils/response-handler";
import * as patientController from "./patient-controller";
import { validateResource } from "../../middleware/validate";
import { CreatePatientSchema } from "./patient-schema";

const router = express.Router();

router.get("/", patientController.getAllPatients);

router.post(
  "/me",
  validateResource(CreatePatientSchema),
  authenticate,
  patientController.createPatientProfile,
);

router.get("/me", authenticate, async (req: Request, res: Response) => {
  const { userId } = requireUser(req);

  const patient = await getPatientByUserId(userId);

  return sendSuccess(res, { data: patient });
});
router.get("/:id", patientController.getPatientByUserId);

export default router;
