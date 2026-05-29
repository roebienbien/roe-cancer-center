import express, { Response, Request } from "express";
import { authenticate } from "../../middleware/authenticate";
import { requireUser } from "../../middleware/require-user";
import { getPatientByUserId } from "./patient-service";
import { sendSuccess } from "../../utils/response-handler";
import * as patientController from "./patient-controller";
import { validateResource } from "../../middleware/validate";
import { registerPatientSchema, updatePatientSchema } from "./patient-schema";

const router = express.Router();

router.get("/", patientController.getAllPatients);

router.post(
  "/",
  authenticate,
  validateResource(registerPatientSchema),
  patientController.registerPatient,
);

router.patch(
  "/me",
  authenticate,
  validateResource(updatePatientSchema),
  patientController.updatePatient,
);

router.get("/me", authenticate, async (req: Request, res: Response) => {
  const { userId } = requireUser(req);

  const patient = await getPatientByUserId(userId);

  return sendSuccess(res, { data: patient });
});

router.get("/:id", patientController.getPatientById);
router.get("/user/:userId", patientController.getPatientByUserId);

export default router;
