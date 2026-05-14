import { z } from 'zod';

export const createAppointmentSchema = z.object({
  patientId: z.string().min(1, 'Patient is required'),
  startAt: z.string().min(1, 'Start time is required'),
  endAt: z.string().min(1, 'Start time is required'),
  notes: z.string().optional(),
});

export type CreateAppointmentFormData = z.infer<typeof createAppointmentSchema>;
