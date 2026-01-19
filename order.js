import mongoose from "mongoose";

export default mongoose.model(
  "Order",
  new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,
    vendorId: mongoose.Schema.Types.ObjectId,
    items: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        name: String,
        weight: Number,
        quantity: Number,
        price: Number
      }
    ],
    totalAmount: Number,
    paymentMethod: String,
    status: { type: String, default: "Placed" }
  }, { timestamps: true })
);
