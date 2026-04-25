import config from "../config";
import { prisma } from "../lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";


export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const payload: JwtPayload = {
    userId: String(user.id),
    role: user.role,
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(payload,
    config.key.private,
    {
      algorithm: "RS256",
      expiresIn: "1d",
    },
  );
  // const token = jwt.sign(
  //   { userId: user.id, role: user.role },
  //   config.key.private,
  //   {
  //     algorithm: "RS256",
  //     expiresIn: "1d",
  //   },
  // );

  // console.log(config.key.public.slice(0, 30));
  // console.log(config.key.private.slice(0, 30));

  return token;
};

const authService = {
  login,
};

export default authService;
