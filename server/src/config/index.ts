import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const envFile = `.env.${process.env.NODE_ENV || "test"}`;
dotenv.config({ path: envFile });

type TConfig = {
  port: number | string;
  key: {
    private: string;
    public: string;
  };
};

export const config: TConfig = {
  port: process.env.PORT || 1337,
  key: {
    private: fs.readFileSync(
      path.join(process.cwd(), process.env.JWT_PRIVATE_KEY_PATH!),
      "utf8",
    ),
    public: fs.readFileSync(
      path.join(process.cwd(), process.env.JWT_PUBLIC_KEY_PATH!),
      "utf8",
    ),
  },
};
export default config;
