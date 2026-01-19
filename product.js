import mongoose from "mongoose";

export default mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    categoryId: mongoose.Schema.Types.ObjectId,
    subCategoryId: mongoose.Schema.Types.ObjectId,
    pricePerKg: Number,
    images: [String],
    stock: Number,
    weightOptions: {
      type: [Number],
      default: [100, 250, 500, 1000, 2000, 5000]
    }
  }, { timestamps: true })
);
