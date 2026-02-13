import express from "express";
import config from "./config";
import cors from "cors";
import router from "./routes/index";
import { errorHandler } from "./utils/error-handler";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", router);
// app.use(errorHandler); // error middleware should be last

// app.get("/", (_req: Request, res: Response) => {
//   res.send("Hello from typescript");
// });

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});
