import config from "./config";
import express from "express";
import cors from "cors";
import router from "./routes/";
import { errorMiddleware } from "./middleware/errror-middlware";
import { httpLogger } from "./middleware/logger-middleware";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser()); //add before routes

app.use("/api", router);

app.use(httpLogger);

const dbUrl = process.env.DATABASE_URL || "";

if (process.env.NODE_ENV === "test" && dbUrl.includes("/rcc_db?")) {
  throw new Error("❌ Test environment is using dev DB!");
}

// Error middleware SHOULD BE LAST
app.use(errorMiddleware);

export default app;
