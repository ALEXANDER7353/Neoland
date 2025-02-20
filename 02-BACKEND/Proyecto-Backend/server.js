const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const server = express();

// Conectar a la base de datos
connectDB()
  .then(() => console.log("✅ Conectado a la base de datos"))
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err);
    process.exit(1);
  });

// 📌 Configurar sesiones **ANTES** de CORS
server.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Solo accesible en el servidor
      secure: process.env.NODE_ENV === "production", // true en producción
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // None en producción, Lax en desarrollo
    },
  })
);

// 📌 Habilitar CORS correctamente
server.use(
  cors({
    origin: "http://localhost:5173", // Permitir solicitudes desde el frontend
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Métodos permitidos
    allowedHeaders: "Content-Type,Authorization", // Headers permitidos
    credentials: true, // Permitir envío de credenciales (cookies, tokens)
  })
);

// Manejar preflight requests de CORS
server.options("*", cors());

// Middleware para parsear JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde 'public'
server.use(express.static(path.join(__dirname, "public")));

// Verificar qué rutas están registradas
console.log("📌 Rutas registradas:");
console.log("/users", "/auth", "/products", "/orders");

// Definir rutas después de configurar CORS y JSON
server.use("/users", userRouter);
server.use("/auth", authRouter);
server.use("/products", productRouter);
server.use("/orders", orderRouter);

// Ruta raíz
server.get("/", (req, res) => {
  console.log("📩 Solicitud recibida en /");
  res.json({ message: "🚀 Servidor en ejecución. Bienvenido a la API." });
});

// Manejo de rutas no encontradas (404)
server.use((req, res) => {
  console.error("❌ Ruta no encontrada:", req.originalUrl);
  res
    .status(404)
    .json({ message: "❌ Ruta no encontrada", path: req.originalUrl });
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
