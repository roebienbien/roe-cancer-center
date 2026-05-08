import express, { Response, Request } from "express";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { requireUser } from "../../utils/requireUser";
import { getPatientByUserId } from "./patient-service";
import { sendSuccess } from "../../utils/response-handler";
import * as patientController from "./patient-controller";

const router = express.Router();

router.get("/", patientController.getAllPatients);

router.post("/me", authenticate, patientController.createPatientProfile);

router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const { userId } = requireUser(req);

  const patient = await getPatientByUserId(userId);

  return sendSuccess(res, { data: patient });
});

export default router;
