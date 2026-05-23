import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// ENVIRONMENT CONFIG

const isTest = process.env.NODE_ENV === "test";

dotenv.config({
  path: path.resolve(process.cwd(), isTest ? ".env.test" : ".env"),
});

// console.log("PRIVATE:", process.env.JWT_PRIVATE_KEY_PATH);
// console.log("PUBLIC:", process.env.JWT_PUBLIC_KEY_PATH);
// console.log("CWD:", process.cwd());

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }

  return value;
}

const config = {
  port: process.env.PORT || 1337,

  key: {
    private: fs.readFileSync(
      path.join(process.cwd(), requireEnv("JWT_PRIVATE_KEY_PATH")),
      "utf8",
    ),

    public: fs.readFileSync(
      path.join(process.cwd(), requireEnv("JWT_PUBLIC_KEY_PATH")),
      "utf8",
    ),
  },
};

export default config;
