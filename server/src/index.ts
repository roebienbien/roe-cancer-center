import express, { Request, Response } from "express";

const app = express();

const PORT = 1337;
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from typescript");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
