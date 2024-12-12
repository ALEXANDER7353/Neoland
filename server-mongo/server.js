const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/users')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders')

require('dotenv').config();

const server = express()

connectDB()


server.use(express.json())
server.use('/users', userRoutes)
server.use('/auth', authRouter)
server.use('/products', productRouter)
server.use('/orders', orderRouter)

server.listen(3000, () => {
    console.log('EL SERVIDOR SE INICIO CORRECTAMENTE')
})

