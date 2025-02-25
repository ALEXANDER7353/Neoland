//products controller
const Product = require("../models/products");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      imageUrl,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
    res.status(500).json({ message: "Create product error" });
  }
};

const readProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Obtener todos los productos
    res.status(200).json(products);
  } catch (error) {
    console.log("🚀 ~ readProducts ~ error:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    Object.keys(req.body).forEach((key) => {
      product[key] = req.body[key];
    });

    const productUpdated = await product.save();
    res.status(200).json(productUpdated);
  } catch (error) {
    console.error("🚀 ~ updateProduct ~ error:", error.message);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createProduct, readProducts, updateProduct, deleteProduct };
