import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { createError } from "../../utils/app-error";
import { RegisterUserInput } from "./auth-schema";
import { Role } from "@prisma/client";

type AuthUser = {
  userId: string;
  role: Role;
};

export const userSelect = {
  id: true,
  email: true,
  role: true,
  createdAt: true,
};

export async function registerUser(data: RegisterUserInput) {
  // Todo: maybe make this as helper(findUserByEmail);
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    throw createError("Email already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      role: "PATIENT",
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      birthDate: new Date(data.birthDate),
      mobileNumber: data.mobileNumber,
    },
    // omit password
    select: userSelect,
  });

  return user;
}

export async function login(
  email: string,
  password: string,
): Promise<AuthUser> {
  // export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email, deletedAt: null },
  });

  if (!user) throw createError("Invalid credentials", 401);

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw createError("Invalid credentials", 401);

  return { userId: user.id, role: user.role };
}
