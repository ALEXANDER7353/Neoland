//auth.js controller
const { json } = require("express");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }
    const newUser = await User.create({ email, name, password });
    const token = generateToken(newUser);
    if (!token) {
      return res.status(400).json({ message: "Error al crear el token" });
    }
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    });
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    res.status(500);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password"); // 👈 Recuperamos el password

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Verificamos que el password ingresado coincida con el almacenado
    const isPasswordCorrect = await user.matchPassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generamos token
    const token = generateToken(user);

    res.json({
      user: { email: user.email, name: user.name },
      token: token,
    });
  } catch (error) {
    console.error("❌ Error en el login:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { registerUser, loginUser };
