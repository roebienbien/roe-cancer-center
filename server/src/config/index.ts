import dotenv from "dotenv";

dotenv.config();

type TConfig = {
  port: number | string;
  // db: {
  //   host: string;
  //   user: string;
  //   password: string;
  //   name: string;
  // };
};

export const config: TConfig = {
  port: process.env.PORT || 1337,
  // db: {
  //   host: process.env.DB_HOST || "localhost",
  //   user: process.env.DB_USER || "root",
  //   password: process.env.DB_PASSWORD || "mysql123",
  //   name: process.env.DB_NAME || "hello",
  // },
};

export default config;
