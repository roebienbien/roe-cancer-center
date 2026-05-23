// import dotenv from "dotenv";
// import path from "path";

// const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
//
// dotenv.config({
//   path: path.resolve(process.cwd(), envFile),
// });
//
import app from "./app";
import config from "./config";

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});
