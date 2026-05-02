import app from "../../../app"
import request from 'supertest';
import { getAuthToken } from "../../auth/__tests__/auth-helper";

describe("Delete /users/:id", () => {
  it("should soft delete a user", async () => {
    const token = await getAuthToken();

    const res = await request(app)
      .delete("/api/users/8556f4c5-3136-4a4c-80cc-c9306b1e662b")
      .set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  })
})
