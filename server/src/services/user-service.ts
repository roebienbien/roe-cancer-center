import bcrypt from "bcrypt";
import { CreateUserInput } from "../schema/user-schema";
import { prisma } from "../lib/prisma";

async function createUser(data: CreateUserInput) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
    },
  });

  return user;
}

async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function getUserById(id: number) {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

async function deleteUser(id: number) {
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
