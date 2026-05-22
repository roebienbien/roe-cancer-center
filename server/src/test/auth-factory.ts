import request from "supertest";
import { prisma } from "../lib/prisma";
import app from "../app";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

// const privateKey = fs.readFileSync(
//   path.join(process.cwd(), process.env.JWT_PRIVATE_KEY_PATH!),
//   "utf8",
// );
function getPrivateKey() {
  return fs.readFileSync(
    path.join(process.cwd(), process.env.JWT_PRIVATE_KEY_PATH!),
    "utf8",
  );
}

export async function getTestAuth() {
  const user = await prisma.user.create({
    data: {
      email: `test-${Date.now()}@example.com`,
      password: "hashed",
      role: "PATIENT",
    },
  });

  const token = jwt.sign({ userId: user.id }, getPrivateKey(), {
    algorithm: "RS256",
  });

  return { token, user };
}

export async function asAuthUser() {
  const { token } = await getTestAuth();

  const cookie = `accessToken=${token}`;

  return {
    get: (url: string) => request(app).get(url).set("Cookie", cookie),

    post: (url: string, body?: any) =>
      request(app).post(url).set("Cookie", cookie).send(body),

    del: (url: string) => request(app).delete(url).set("Cookie", cookie),
  };
}
