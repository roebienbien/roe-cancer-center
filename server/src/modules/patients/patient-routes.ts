import express, { Response } from "express";
import { authenticate, AuthRequest } from "../../middleware/authenticate";
import { requireUser } from "../../utils/requireUser";
import { getPatientByUserId } from "./patient-service";
import { sendSuccess } from "../../utils/response-handler";
import * as patientService from "./patient-service";
import { schedulingPolicy } from "node:cluster";

const router = express.Router();

router.post("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const { userId } = requireUser(req);
  const patient = await patientService.createPatientProfile(userId, req.body);

  return sendSuccess(res, {
    data: patient,
    message: "Patient profile created",
    statusCode: 401,
  });
});

router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const { userId } = requireUser(req);

  const patient = await getPatientByUserId(userId);

  return sendSuccess(res, { data: patient });
});

export default router;
