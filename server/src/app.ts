import express from "express"
import cors from 'cors'
import router from './routes/'
import { Request, Response, NextFunction } from 'express'
import { sendError } from "./utils/response-handler";


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", router);

// ERROR HANDLER SHOULD BE LAST
app.use((err: any, _: Request, res: Response, next: NextFunction) => {


  return sendError(res, {
    message: err.message || "Internal Server Error",
    statusCode: err.statusCode || 500,
  })
  // return res.status(err.statusCode || 500).json({ success: false, message: err.message || "Internal Server Error" })
})

export default app;
