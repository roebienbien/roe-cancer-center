import { z } from "zod";

const formatFieldName = (field: string) => {
  return field.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
};

export const upperString = (field: string) => {
  return z
    .string()
    .trim()
    .min(1, `${formatFieldName(field)} is reqauired`)
    .transform((v) => v.toUpperCase());
};

export const requiredString = (field: string) => {
  z.string().min(1, `${field} is required`);
};

export const emailString = () => {
  z.email().trim().toLowerCase();
};
