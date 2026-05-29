import { z } from 'zod';

export const registerPatientSchema = z.object({
  lastName: z.string().min(1, 'Last name is required'),
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().min(1, 'Middle name is required'),
  sex: z.string().min(1, 'Sex is required'),
  birthDate: z.string().min(1, 'BirtDate is required'),
  phone: z.string().min(1, 'Phone is required'),
  address: z.string().min(1, 'Address is required'), // split into brgy, street
  notes: z.string().optional(),
});

// export const updatePatientSchema = z.object({
//   lastName: z.string().min(1, 'Last name is required').optional(),
//   firstName: z.string().min(1, 'First name is required').optional(),
//   middleName: z.string().min(1, 'Middle name is required').optional(),
//   sex: z.string().min(1, 'Sex is required').optional(),
//   birthDate: z.string().min(1, 'Birth date is required').optional(),
//   phone: z.string().min(1, 'Phone is required').optional(),
//   address: z.string().min(1, 'Address is required').optional(),
//   notes: z.string().optional(),
// });
export const updatePatientSchema = registerPatientSchema.partial();

export type PatientFormInput = z.infer<typeof registerPatientSchema>;
// export type RegisterPatientInput = z.infer<typeof registerPatientSchema>;
// export type UpdatePatientInput = z.infer<typeof updatePatientSchema>;
