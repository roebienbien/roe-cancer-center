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
        // role: "DOCTOR",
      },
    });


    // await prisma.doctor.create({
    //   data: {
    //     userId: user.id,
    //     firstName: "Test",
    //     lastName: "Doctor",
    //     specialization: "Oncology",
    //   },
    // });

    await prisma.patient.create({
      data: {
        // userId: "replace-with-user-id",
        userId: user.id,
        firstName: "Juan",
        lastName: "Dela Cruz",
        middleName: "Santos",
        birthDate: new Date("1995-06-15"),
        sex: "MALE",
        phone: "+639171234567",
        address: "Santa Ana, Taguig City, Philippines",
        notes: "No known allergies. First-time chemo patient.",
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
  const users = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc"
    }
  })
  return users;
}

// async function getUserById(id: string) {
//   const user = await prisma.user.findUnique({ where: { id }, include: { bookings: true } });
//
//   if (!user) {
//     throw new Error("User not found");
//   }
//   return user;
// }
//
// async function deleteUser(id: string) {
//   const deletedUser = await prisma.user.delete({ where: { id } });
//   return deletedUser;
// }

async function deactivateUser(id: string, actorId: string) {
  return prisma.user.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      deletedById: actorId,
    }
  })

}

const userService = {
  createUser,
  getAllUsers,
  // getUserById,
  // deleteUser,
  deactivateUser,
};

export default userService;
