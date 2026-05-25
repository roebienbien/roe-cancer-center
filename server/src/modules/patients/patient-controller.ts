import { asyncHandler } from "../../utils/async-handler";
import { requireUser } from "../../middleware/require-user";
import { sendSuccess } from "../../utils/response-handler";
import { CreatePatientInput } from "./patient-schema";
import * as patientService from "./patient-service";
import { Request, Response } from "express";

export const createPatientProfile = asyncHandler(
  async (req: Request<{}, {}, CreatePatientInput>, res: Response) => {
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

export const getPatientByUserId = asyncHandler(
  async (req: Request, res: Response) => {
    const patient = await patientService.getPatientByUserId(
      req.params.id as string,
    );

    return sendSuccess(res, { data: patient });
  },
);
