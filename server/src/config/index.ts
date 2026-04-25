import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({
  path: process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env",
});

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
      path.join(process.cwd(), "keys/private.pem"),
      "utf8"
    ),
    public: fs.readFileSync(
      path.join(process.cwd(), "keys/public.pem"),
      "utf8"
    ),
  },
};;

export default config;
