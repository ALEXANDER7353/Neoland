const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/users')
const authRouter = require('./routes/auth')
require('dotenv').config();

const server = express()

connectDB()


server.use(express.json())
server.use('/users', userRoutes)
server.use('/auth', authRouter)

server.listen(3000, () => {
    console.log('EL SERVIDOR SE INICIO CORRECTAMENTE')
})





