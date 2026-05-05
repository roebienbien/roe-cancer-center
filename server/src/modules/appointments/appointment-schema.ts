import { z } from "zod";

export const createAppointmentSchema = z.object({
  scheduleAt: z
    .string()
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), {
      message: "Invalid date/time",
    }),
});
