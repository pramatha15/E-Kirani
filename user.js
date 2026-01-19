import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  phone: { type: String, unique: true },
  address: String,
  role: {
    type: String,
    enum: ["customer", "vendor", "admin"],
    default: "customer"
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
