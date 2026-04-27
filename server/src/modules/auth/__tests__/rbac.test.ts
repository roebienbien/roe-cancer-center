import request from "supertest";
import app from '../../../app'


//
// beforeAll(async () => {
//   // // CREATE ADMIN
//   // await request(app).post('/api/register').send({
//   //   email: "admin@example.com",
//   //   password: "Password123!",
//   //   role: "ADMIN"
//   // })
//   //
//   // // CREATE PATIENT
//   // await request(app).post('/api/register').send({
//   //   email: "patient@example.com",
//   //   password: "Password123!",
//   //   role: "PATIENT"
//   // })
//
//   const adminRes = await request(app).post("/api/login").send({
//     email: "margaret.beatty@example.com",
//     password: "Password123!"
//     // email: "admin@example.com",
//     // password: "Password123!"
//   })
//
//   console.log("ADMIN LOGIN:", adminRes.body)
//
//   adminToken = adminRes.body.data?.token;
//
//
//   const patientRes = await request(app).post("/api/login").send({
//     email: "idella.kovacek@example.com",
//     password: "Password123!"
//     // email: "patient@example.com",
//     // password: "Password123!"
//   })
//
//   patientToken = patientRes.body.data?.token;
// })
//
//


describe("RBAC: Users routes", () => {
  let adminToken: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMTM3ZGExOC02OTUzLTRiNTYtYWU3Mi1lZTc4MDIwNTUxZjkiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NzczMjk5ODksImV4cCI6MTc3NzQxNjM4OX0.cQ9cB5CfbUMgLNEpuCoijtjczKIBCoHBo4WxBzgKF8ZBsSO4gX6yCqzIDqLLB3UaEVMgX2Mfp80hpRCR6O0dK3ABCF2uj9wLUUGSHMqTXxvEj8GXm941-R9Ng1YFlwBsShuIwddVu3y3Xks-yHFJHqxf9RxQ_vQ0QOxay36mr3Bqjkq2TqPLYdmTxfnq30eTcehQrrUBlnn86efwxKz0A9kUUrDzxfdEDDenPP9w-xS6wUpZPNrlyyy1n96JQe2wu_lvMC0DUrmRjfy4SZzKFaani0MYz1lX7p4deayAVYLtHVLA8-pxzTi21eBnPHjc4XTQFUithUUbykbMJnDySQ"
  const patientToken: string =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MmU5Yzg1OS01YTRlLTRlM2ItODEwYy1kNjI4ZTU2OGUzYzAiLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTc3NzMyOTc1MCwiZXhwIjoxNzc3NDE2MTUwfQ.UfumUupw5IRj1K04_XclzcExKsFOgSyXYPJ4B9EE7MCrh61rwwtGn0Eacw9am2665sH1c0_X6eMHtBz1pFl-SeVxmc3_BopxVfq15CcEGPSU3gO1fcXkXZhCkatbLMdx0BOL3psG36K0rnt_08k_FtfpcHuTa7W5G3hHFrrSJ4mVEZ09aBdE7jUt0wdZNmdofBKuA9compNlFyxiITeY1Vy6Dz-wSRmPmb5N5xsyG6WXIIxGtkJrByz6Zw_6XhRVVS8amNriZbI_0Fy9z61Tm2IIFDy8utfGfTZtjae45jQujd2Q9zeGupFf0zBXP2k-kydjoKyKNE58ry-eT9Z8oQ";

  console.log("ADMIN TOKEN: ", adminToken)
  console.log("PATIENT TOKEN: ", patientToken)

  it("should allow ADMIN to access users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  })

  it("should forbid PATIENT from accessing users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${patientToken}`);

    expect(res.status).toBe(403);
    expect(res.body.success).toBe(false)
  })

  it("should return 401 if no token", async () => {
    const res = await request(app).get("/api/users");

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  })
})
