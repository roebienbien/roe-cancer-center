import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const numberField = (requiredMessage: string) =>
  z.preprocess(
    (value) => (Number.isNaN(value) ? undefined : value),
    z.number({
      required_error: requiredMessage,
    }),
  );

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters'),
    confirmPassword: z.string(),
    lastName: z.string().min(1, 'lastName is required'),
    firstName: z.string().min(1, 'firstName is required'),
    middleName: z.string().optional(),
    // birthDate: z.coerce.date(),
    // birthYear: z.coerce.number({ required_error: 'Year is required', invalid_type_error: 'Year is required' }),
    // birthMonth: z.coerce.number({ required_error: 'Month is required', invalid_type_error: 'Month is required' }),
    // birthDay: z.coerce.number({ required_error: 'Day is required', invalid_type_error: 'Day is required' }),
    birthYear: numberField('Year is required'),
    birthMonth: numberField('Month is required'),
    birthDay: numberField('Day is required'),
    mobileNumber: z.string().min(1, 'mobileNumber is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormInput = z.infer<typeof registerSchema>;

export type LoginFormInput = z.infer<typeof loginSchema>;
