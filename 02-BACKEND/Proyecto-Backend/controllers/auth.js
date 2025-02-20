const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcryptjs");

// 📌 Función para generar el token de autenticación
const generateToken = (user) => {
  if (!process.env.JWT_SECRET) {
    console.error(
      "❌ ERROR: JWT_SECRET no está definido en las variables de entorno"
    );
    return null;
  }

  try {
    return jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  } catch (error) {
    console.error("❌ Error al generar el token:", error);
    return null;
  }
};

// 📌 REGISTRAR USUARIO
const registerUser = async (req, res) => {
  console.log("📩 Recibiendo datos para registro:", req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // 🔹 Convertir email a minúsculas antes de almacenarlo
    const emailLower = email.trim().toLowerCase();

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email: emailLower });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // 🔍 Verificar que la contraseña recibida es un string válido
    if (typeof password !== "string") {
      console.error(
        "❌ Error: La contraseña proporcionada no es un string válido"
      );
      return res
        .status(400)
        .json({ message: "Formato de contraseña inválido" });
    }

    // 🔒 Encriptar contraseña antes de guardarla
    console.log("🔑 Encriptando la contraseña...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("🚀 ~ registerUser ~ hashedPassword:", hashedPassword);

    if (!hashedPassword) {
      console.error("❌ Error: No se pudo encriptar la contraseña");
      return res
        .status(500)
        .json({ message: "Error al encriptar la contraseña" });
    }

    console.log("✅ Contraseña encriptada correctamente:", hashedPassword);

    // Crear usuario en la base de datos
    const newUser = await User.create({
      name,

      email: emailLower,

      password: hashedPassword,
    });

    // Generar token
    const token = generateToken(newUser);
    if (!token) {
      return res.status(400).json({ message: "Error al generar el token" });
    }

    console.log("✅ Usuario registrado correctamente:", newUser.email);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    });
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
// 📌 INICIAR SESIÓN (LOGIN)
const loginUser = async (req, res) => {
  console.log("📩 Recibiendo datos para login:", req.body);

  if (!req.body || typeof req.body !== "object") {
    console.error("❌ Error: req.body no es un objeto válido");
    return res.status(400).json({ message: "Solicitud mal formada" });
  }

  console.log("🔍 Claves recibidas en req.body:", Object.keys(req.body));
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("❌ Falta email o contraseña");
    return res
      .status(400)
      .json({ message: "Email y contraseña son obligatorios" });
  }

  try {
    console.log("📩 Intento de login para:", email);

    // 🔹 Convertir email a minúsculas antes de la búsqueda
    const emailLower = email.trim().toLowerCase();

    // Buscar usuario por email
    const user = await User.findOne({ email: emailLower });
    if (!user) {
      console.log("❌ Usuario no encontrado");
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    console.log("✅ Usuario encontrado en la base de datos:", user.email);

    // Verificar si password es un string antes de comparar
    if (typeof password !== "string") {
      console.log("❌ Error: La contraseña ingresada no es un string válido");
      return res
        .status(400)
        .json({ message: "Formato de contraseña inválido" });
    }

    // Comparar contraseñas correctamente
    console.log("🔍 Contraseña ingresada:", password);
    console.log("🔍 Hash almacenado en BD:", user.password);

    const isMatch = await bcrypt.hash(password, 5);
    console.log("🔍 ¿Las contraseñas coinciden?:", isMatch);

    if (!isMatch) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    console.log("✅ Contraseña correcta, generando token...");
    const token = generateToken(user);
    if (!token) {
      return res.status(400).json({ message: "Error al generar el token" });
    }

    console.log("✅ Login exitoso para:", user.email);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.error("🚀 ~ loginUser ~ error:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { registerUser, loginUser };
