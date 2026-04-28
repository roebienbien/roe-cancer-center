import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { AuthJwtPayload } from "../../types/auth";
import { createError } from "../../utils/app-error";


export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw createError("Invalid credentials", 401);

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw createError("Invalid credentials", 401);

  // const payload: AuthJwtPayload = {
  //   userId: String(user.id),
  //   role: user.role,
  // };

  // const token = jwt.sign(payload, config.key.private, {
  //   algorithm: "RS256",
  //   expiresIn: "1d",
  // });
  //
  // return token;

  return user
};

const authService = {
  login,
};

export default authService;
