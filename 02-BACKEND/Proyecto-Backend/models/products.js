// prducts.js model
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    description: { type: String },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
