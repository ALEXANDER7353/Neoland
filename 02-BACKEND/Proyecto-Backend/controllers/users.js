const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

// 📌 Crear usuario (con encriptación de contraseña)
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const existingUser = await User.findOne({
      email: email.trim().toLowerCase(),
    });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // 🔒 Encriptar contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Usuario creado correctamente", user: newUser });
  } catch (error) {
    console.error("❌ Error en createUser:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// 📌 Leer usuario(s)
const readUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      return res.status(200).json(user);
    }

    // 📌 Si no hay ID, devolver todos los usuarios
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error en readUser:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// 📌 Actualizar usuario
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario actualizado", user });
  } catch (error) {
    console.error("❌ Error en updateUser:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// 📌 Eliminar usuario
const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id);

    if (!userDelete) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("❌ Error en deleteUser:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// 📌 Login de usuario (con validación de contraseña)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    // 🔹 Convertir email a minúsculas para evitar problemas de coincidencia
    const emailLower = email.trim().toLowerCase();
    const user = await User.findOne({ email: emailLower });

    if (!user) {
      console.log("❌ Usuario no encontrado:", emailLower);
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    console.log("✅ Usuario encontrado:", user.email);
    console.log("🔐 Contraseña ingresada:", password);
    console.log("🔐 Contraseña almacenada en BD:", user.password);

    // 🔍 Verificar si password es un string antes de comparar
    if (typeof password !== "string") {
      console.log("❌ Error: La contraseña ingresada no es un string");
      return res
        .status(400)
        .json({ message: "Formato de contraseña inválido" });
    }

    // 🔒 Comparar la contraseña ingresada con la almacenada (encriptada)
    const isMatch = await bcrypt.compare(password, user.password);

    console.log("🔍 Resultado de bcrypt.compare():", isMatch);

    if (!isMatch) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    console.log("✅ Contraseña correcta, generando token...");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login exitoso",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("🚀 ~ loginUser ~ error:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { createUser, readUser, updateUser, deleteUser, loginUser };
