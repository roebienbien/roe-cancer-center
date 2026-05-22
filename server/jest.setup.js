require("dotenv").config({
  path: ".env.test",
  override: true,
});

process.env.NODE_ENV = "test";
// throw new Error("SETUP FILE LOADED");
