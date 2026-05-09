import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { createError } from "../../utils/app-error";
import { Role } from "@prisma/client";

type AuthUser = {
  userId: string;
  role: Role;
};

export const login = async (
  email: string,
  password: string,
): Promise<AuthUser> => {
  const user = await prisma.user.findUnique({
    where: { email, deletedAt: null },
  });

  if (!user) throw createError("Invalid credentials", 401);

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw createError("Invalid credentials", 401);

  return { userId: user.id, role: user.role };
};

const authService = {
  login,
};

export default authService;
