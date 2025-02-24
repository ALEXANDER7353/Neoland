const express = require("express");
const {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const router = express.Router();

router.post("/", createProduct);
router.get("/", readProducts); // Nueva ruta para obtener todos los productos
router.get("/:id", readProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
