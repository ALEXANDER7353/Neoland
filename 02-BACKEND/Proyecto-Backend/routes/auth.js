const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

// Ruta para registrar un usuario
router.post("/register", registerUser);

// Ruta para iniciar sesión
router.post("/login", loginUser);

module.exports = router;
