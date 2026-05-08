import { AuthRequest } from "../../middleware/authenticate";
import { asyncHandler } from "../../utils/async-handler";
import { requireUser } from "../../utils/requireUser";
import { sendSuccess } from "../../utils/response-handler";
import * as patientService from "./patient-service";
import { Request, Response } from "express";

export const createPatientProfile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { userId } = requireUser(req);
    const patient = await patientService.createPatientProfile(userId, req.body);

    return sendSuccess(res, {
      data: patient,
      message: "Patient profile created",
      statusCode: 201,
    });
  },
);

export const getAllPatients = asyncHandler(
  async (_: Request, res: Response) => {
    const patients = await patientService.getAllPatients();

    return sendSuccess(res, { data: patients });
  },
);
