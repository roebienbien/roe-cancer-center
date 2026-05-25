import bcrypt from "bcrypt";
import { CreateUserInput } from "./user-schema";
import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";
import { Prisma } from "@prisma/client";

// Improve into safeUser() mapper
export const userSelect = {
  id: true,
  email: true,
  role: true,
  createdAt: true,
};

// export async function createUser(data: CreateUserInput) {
//   try {
//     const hashedPassword = await bcrypt.hash(data.password, 10);
//     const user = await prisma.user.create({
//       data: {
//         email: data.email,
//         password: hashedPassword,
//         role: "PATIENT",
//       },
//       // omit password
//       select: userSelect,
//     });
//
//     return user;
//   } catch (err: unknown) {
//     if (
//       err instanceof Prisma.PrismaClientKnownRequestError &&
//       err.code === "P2002"
//     ) {
//       throw createError("Email already exists", 400);
//     }
//     throw err; //let global error handle
//   }
// }

export async function getAllUsers() {
  const users = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw createError("User not found", 404);
  }
  return user;
}

export async function deactivateUser(id: string, actorId: string) {
  return prisma.user.update({
    where: { id, deletedAt: null },
    data: {
      deletedAt: new Date(),
      deletedById: actorId,
    },
  });
}
