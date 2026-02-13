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

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

const userService = {
  createUser,
  getUsers,
};

export default userService;
