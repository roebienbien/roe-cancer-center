import bcrypt from "bcrypt";
import { CreateUserInput } from "./user-schema";
import { prisma } from "../../lib/prisma";
import { createError } from "../../utils/app-error";

async function createUser(data: CreateUserInput) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        // role: "ADMIN",
      },
    });
    return user;
  } catch (err: any) {
    if (err.code === "P2002" && err.meta?.target?.includes("email")) {
      throw createError("Email already exists", 400);
    }
    throw err; //let global error handle
  }

}

async function getAllUsers() {
  const users = await prisma.user.findMany()
  // const users = await prisma.user.findMany({
  //   include: {
  //     bookings: true,
  //   }
  // });
  return users;
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({ where: { id }, include: { bookings: true } });

  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

async function deleteUser(id: string) {
  const deletedUser = await prisma.user.delete({ where: { id } });
  return deletedUser;
}

const userService = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};

export default userService;
