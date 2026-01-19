import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { phone, fullName, address } = req.body;

  let user = await User.findOne({ phone });
  if (!user) {
    user = await User.create({ phone, fullName, address });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "SECRET_KEY"
  );

  res.json({ token, user });
});

export default router;
