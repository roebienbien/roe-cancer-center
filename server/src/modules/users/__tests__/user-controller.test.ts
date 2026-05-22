import app from "../../../app";
import request from "supertest";
import { prisma } from "../../../lib/prisma";
import { asAuthUser } from "../../../test/auth-factory";

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users", () => {
  it("should create user", async () => {
    const res = await request(app).post("/api/users").send({
      email: "test@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
    });

    expect(res.status).toBe(201);
  });
});

describe("GET /users", () => {
  it("should fetch all users", async () => {
    const auth = await asAuthUser();
    const res = await auth.get("/api/users");

    expect(res.status).toBe(200);
  });
});

// describe("Delete /users/:id", () => {
//   it("should soft delete a user", async () => {
//     const token = await getAuthToken();
//
//     const res = await request(app)
//       .delete("/api/users/8556f4c5-3136-4a4c-80cc-c9306b1e662b")
//       .set("Authorization", `Bearer ${token}`);
//
//     expect(res.status).toBe(200);
//     expect(res.body.success).toBe(true);
//   });
// });
