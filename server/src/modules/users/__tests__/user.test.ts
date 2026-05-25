import { asAuthUser } from "../../../test/auth-factory";

// beforeEach(async () => {
//   await prisma.user.deleteMany();
// });

describe("GET /users", () => {
  it("should fetch all users", async () => {
    const auth = await asAuthUser();
    const res = await auth.get("/api/users");

    expect(res.status).toBe(200);
  });
});
