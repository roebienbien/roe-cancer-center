import app from "../../../app"
import request from "supertest"

export const getAuthToken = async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({
      email: "margaret.beatty@example.com",
      password: "Password123!"
    })

  if (!res.body?.data?.accessToken) {
    throw new Error("Failed to get auth token")
  }

  return res.body.data.accessToken
}
