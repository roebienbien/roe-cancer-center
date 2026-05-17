import express from "express";

const router = express.Router();

router.get("/me", (req, res) => res.status(202).send("Hello"));

export default router;
