const express = require('express')
const connectDB = require('./config/db')
const productRouter = require('./routes/products')
const userRouter = require('./routes/users');



require('dotenv').config();

const server = express()

connectDB()

server.use(express.json())
server.use('/products', productRouter)
server.use('/users', userRouter);



server.listen(3000, () => {
    console.log('HOLA SERVIDOR')
})
