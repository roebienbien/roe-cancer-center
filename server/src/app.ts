import express from "express"
import cors from 'cors'
import router from './routes/'
import { errorMiddleware } from "./middleware/errror-middlware";
import { httpLogger } from "./middleware/logger-middleware";


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/api/test-error", (req, res) => {
  throw new Error("something broke")
})

app.get("/api/test-operational", (req, res, next) => {
  const err = {
    message: "Email already exists",
    statusCode: 400,
    isOperational: true,
    errors: { email: "taken" },
  };

  next(err);
});
app.use("/api", router);

app.use(httpLogger);
// Error middleware SHOULD BE LAST
app.use(errorMiddleware)

export default app;
