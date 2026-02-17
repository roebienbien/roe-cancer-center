import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV == "production" ? ".env.production" : ".env",
});

type TConfig = {
  port: number | string;
  key: {
    private: string;
    public: string;
  };
  // db: {
  //   host: string;
  //   user: string;
  //   password: string;
  //   name: string;
  // };
};

//RSA KEYS
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

if (!privateKey || !publicKey) {
  throw new Error("JWT keys are missing in environment variables");
}

export const config: TConfig = {
  port: process.env.PORT || 1337,
  key: {
    private: privateKey,
    public: publicKey,
  },
  // db: {
  //   host: process.env.DB_HOST || "localhost",
  //   user: process.env.DB_USER || "root",
  //   password: process.env.DB_PASSWORD || "mysql123",
  //   name: process.env.DB_NAME || "hello",
  // },
};

export default config;
