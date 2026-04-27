import request from "supertest"
import app from "../app"

const YOUR_TOKEN = ""

// IMPROVE:
describe("GET /api/users", () => {
  it(`should return users ("admin only")`, async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${YOUR_TOKEN}`)

    expect(res.status).toBe(200);
    // expect(res.body.success).toBe(true);
    // expect(Array.isArray(res.body.data)).toBe(true);
  })
})
