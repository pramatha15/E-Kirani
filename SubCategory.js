import mongoose from "mongoose";

export default mongoose.model(
  "SubCategory",
  new mongoose.Schema({
    name: String,
    categoryId: mongoose.Schema.Types.ObjectId
  })
);
