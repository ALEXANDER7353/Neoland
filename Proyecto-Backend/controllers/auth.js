const jwt = require('jsonwebtoken')
const User = require('../models/users')
const { json } = require('express')

const generateToken = (user) => {
    try {
        return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '30d' })
    } catch (error) {
        console.error('Error al generar el token:', error)
        return null
    }
}

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const registerUser = async (req, res) => {
    const { email, name, password } = req.body

    try {
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' })
        }
        const newUser = await User.create({ email, name, password })
        const token = generateToken(newUser)
        if (!token) {
            return res.status(400).json({ message: 'Error al crear el token' })
        }
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: token,
        })
    } catch (error) {
        console.log("🚀 ~ registerUser ~ error:", error)
        res.status(500)
    }

}

module.exports = { registerUser }