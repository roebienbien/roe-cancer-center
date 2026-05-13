import { z } from "zod";

export const createAppointmentSchema = z
  .object({
    startAt: z.string().transform((val) => new Date(val)),
    endAt: z.string().transform((val) => new Date(val)),
  })
  .refine((data) => data.endAt > data.startAt, {
    message: "End time must be after start time",
    path: ["endAt"],
  });

export const updateAppointmentStatusSchema = z.object({
  body: z.object({
    status: z.enum(["APPROVED", "REJECTED"]),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>;
export type UpdateAppointmentStatusInputBody = z.infer<
  typeof updateAppointmentStatusSchema
>["body"];
export type UpdateAppointmentStatusInputParams = z.infer<
  typeof updateAppointmentStatusSchema
>["params"];
