import express from "express";
import Order from "../models/Order.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  res.json(await Order.create(req.body));
});

router.get("/my", auth, async (req, res) => {
  res.json(await Order.find({ customerId: req.user.id }));
});

export default router;
