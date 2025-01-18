const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const orderRouter = require('./routes/orders')

const server = express();

connectDB();

server.use(express.json());

server.use("/users", userRouter);
server.use("/auth", authRouter);
server.use("/products", productRouter);
server.use('/orders', orderRouter)

server.listen(3000, () => {
  console.log("HOLA SERVIDOR");
});
