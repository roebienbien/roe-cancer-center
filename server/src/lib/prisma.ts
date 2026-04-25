// import { PrismaClient } from "@prisma/client";
//
// export const prisma = new PrismaClient();
//
// process.on("SIGINT", async () => {
//   await prisma.$disconnect();
//   process.exit(0);
// });

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
