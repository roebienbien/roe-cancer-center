import { z } from 'zod';

export const createAppointmentSchema = z.object({
  doctorSlodId: z.string().uuid(),
});

export type CreateAppointmentFormData = z.infer<typeof createAppointmentSchema>;
