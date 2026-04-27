import request from "supertest";
import app from "../../../app";

const email = "idella.kovacek@example.com"
const password = "Password123!"

describe("Auth - Login", () => {
  it("should login and return token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: email,
        password: password,
      })

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("token")
  })
})
