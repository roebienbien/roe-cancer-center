import request from "supertest";
import bcrypt from "bcrypt";
import app from "../../../app";
import { prisma } from "../../../lib/prisma";

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /auth/register", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  it("should register user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "test@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
    });

    expect(res.status).toBe(201);
    expect(res.body.data.email).toBe("test@example.com");
  });

  it("should reject duplicate email", async () => {
    await prisma.user.create({
      data: {
        email: "test@example.com",
        password: "hashed",
        role: "PATIENT",
      },
    });

    const res = await request(app).post("/api/auth/register").send({
      email: "test@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
    });

    expect(res.status).toBe(409);
  });
});

describe("POST /auth/login", () => {
  it("should login successfully", async () => {
    const hashedPassword = await bcrypt.hash("Password123!", 10);

    await prisma.user.create({
      data: {
        email: "test@example.com",
        password: hashedPassword,
        role: "PATIENT",
      },
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "test@example.com",
      password: "Password123!",
    });

    expect(res.status).toBe(200);

    expect(res.headers["set-cookie"]).toBeDefined();
  });

  // it("shoud refresh access token", async () => {
  //   const loginRes = await request(app).post("/api/auth/login").send({
  //     email: "test@example.com",
  //     password: "Password123!",
  //   });
  //
  //   const cookies = loginRes.headers["set-cookie"];
  //
  //   //refresh
  //   const res = await request(app)
  //     .post("/api/auth/refresh")
  //     .set("Cookie", cookies);
  //
  //   expect(res.status).toBe(200);
  //   expect(res.headers["set-cookie"]).toBeDefined();
  // });

  it("should reject missing refresh token", async () => {
    const res = await request(app).post("/api/auth/refresh");
    expect(res.status).toBe(401);
  });

  it("should reject invalid refrsh token", async () => {
    const res = await request(app)
      .post("/api/auth/refresh")
      .set("Cookie", ["refresToke=invalid"]);

    expect(res.status).toBe(401);
  });

  // it("should reject invalid refresh token", async () => {
  //   const res = await request(app)
  //     .post("/api/auth/refrehs")
  //     .set("Cookie", ["refreshToken=invaild"]);
  //
  //   expect(res.status).toBe(401);
  // });
});

// Todo: Need to implement token blacklisting first
// describe("POST /auth/logout", () => {
//   it("should logout and block access to protected routes", async () => {
//     // 1. create user
//     const hashedPassword = await bcrypt.hash("Password123!", 10);
//
//     const user = await prisma.user.create({
//       data: {
//         email: "test@example.com",
//         password: hashedPassword,
//         role: "PATIENT",
//       },
//     });
//
//     // 2. login
//     const loginRes = await request(app).post("/api/auth/login").send({
//       email: "test@example.com",
//       password: "Password123!",
//     });
//
//     const cookie = loginRes.headers["set-cookie"];
//
//     // 3. logout
//     await request(app).post("/api/auth/logout").set("Cookie", cookie);
//
//     // 4. try accessing protected route
//     const res = await request(app).get("/api/users").set("Cookie", cookie);
//     expect(res.status).toBe(401);
//   });
// });
