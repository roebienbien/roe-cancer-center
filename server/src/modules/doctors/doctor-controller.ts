import { asyncHandler } from "../../utils/async-handler";
import { requireUser } from "../../middleware/require-user";
import { sendSuccess } from "../../utils/response-handler";
import { CreateDoctorInput } from "./doctor-schema";
import * as doctorService from "./doctor-service";
import { Request, Response } from "express";

export const createDoctor = asyncHandler(
  async (req: Request<{}, {}, CreateDoctorInput>, res: Response) => {
    const { userId } = requireUser(req);

    const doctor = await doctorService.createDoctor(userId, req.body);

    return sendSuccess(res, {
      data: doctor,
      message: "Doctor profile created",
      statusCode: 201,
    });
  },
);

export const getAllDoctors = asyncHandler(
  async (req: Request, res: Response) => {
    const doctors = await doctorService.getAllDoctors();

    return sendSuccess(res, { data: doctors, message: "Doctors fetched" });
  },
);
