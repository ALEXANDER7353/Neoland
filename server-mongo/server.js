const express = require('express')

const connectDB = require('./config/db')
require('dotenv').config();

const server = express()

connectDB()

server.use(express.json())

server.listen(3000,()=>{

})