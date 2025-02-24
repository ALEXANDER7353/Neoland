const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const session = require("express-session");
const path = require("path");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");

const server = express();

// 📌 Conectar a la base de datos
connectDB()
  .then(() => console.log("✅ Conectado a la base de datos"))
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err);
    process.exit(1);
  });

// 📌 Habilitar CORS ANTES de sesiones
server.use(
  cors({
    origin: "http://localhost:5173", // Especificamos el origen permitido
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
    credentials: true, // Permitir envío de cookies y autenticación
  })
);

// 📌 Configurar sesiones DESPUÉS de CORS
server.use(
  session({
    secret: process.env.SESSION_SECRET || "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Solo en producción
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    },
  })
);

// Middleware para parsear JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde 'public'
server.use(express.static(path.join(__dirname, "public")));

// 📌 Registrar rutas
console.log("📌 Rutas registradas:");
console.log("/users", "/auth", "/products", "/orders");

server.use("/users", userRouter);
server.use("/auth", authRouter);
server.use("/products", productRouter);
server.use("/orders", orderRouter);

// 📌 Ruta raíz
server.get("/", (req, res) => {
  res.json({ message: "🚀 Servidor en ejecución. Bienvenido a la API." });
});

// 📌 Manejo de rutas no encontradas (404)
server.use((req, res) => {
  res
    .status(404)
    .json({ message: "❌ Ruta no encontrada", path: req.originalUrl });
});

// 📌 Iniciar el servidor
server.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
