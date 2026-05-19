import { Prisma } from "@prisma/client";

export function formatPrismaError(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      name: "PrismaError",
      code: error.code,
      message: error.message,
      meta: error.meta,
    };
  }

  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    name: "UnknownError",
    error,
  };
}
