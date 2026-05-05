import { z } from "zod";

export const createAppointmentSchema = z.object({
  startAt: z.string().transform((val) => new Date(val)),
  endAt: z.string().transform((val) => new Date(val)),
}).refine((data) => data.endAt > data.startAt, {
  message: "End time must be after start time",
  path: ["endAt"],
});
