import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters'),
    confirmPassword: z.string(),
    lastName: z.string().min(1, 'lastName is required'),
    firstName: z.string().min(1, 'firstName is required'),
    middleName: z.string().optional(),
    birthDate: z.coerce.date(),
    mobileNumber: z.string().min(1, 'mobileNumber is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormInput = z.infer<typeof registerSchema>;

export type LoginFormInput = z.infer<typeof loginSchema>;
