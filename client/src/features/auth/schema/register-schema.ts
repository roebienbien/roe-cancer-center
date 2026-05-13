import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // 👈 attach error to this field
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
