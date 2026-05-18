import express from "express";

const router = express.Router();

router.get("/test", () => console.log("Hello"));

export default router;
