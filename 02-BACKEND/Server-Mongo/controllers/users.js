const User = require('../models/users')



const updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, { ...req.body })
        if (!user) {
            return res.status(404).json({ errorMessage: 'User not found' })
        }
        res.json(user)

    } catch (error) {
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id)
        console.log("🚀 ~ deleteUser ~ userDelete:", userDelete)
        if (!userDelete) {
            return res.status(404).json({ errorMessage: 'User not found' })
        }
        res.json({ message: 'User deleted' })

    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error)
        res.status(500)

    }
}

const createUser = async (req, res) => {
    try {
        // Crear un nuevo usuario usando los datos del cuerpo de la solicitud
        const newUser = new User({ ...req.body })

        // Guardar el usuario en la base de datos
        await newUser.save()

        // Enviar el usuario creado como respuesta
        res.status(201).json(newUser)

    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)

        // Manejar errores, como validaciones fallidas
        res.status(500).json({ errorMessage: 'Failed to create user' })
    }
}





    module.exports = { updateUser, deleteUser,createUser}