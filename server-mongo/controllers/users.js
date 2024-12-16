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


const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Busca todos los usuarios en la base de datos
        res.status(200).json(users); // Devuelve un JSON con la lista de usuarios
    } catch (error) {
        console.error("🚀 ~ getUsers ~ error:", error); // Log para depurar
        res.status(500).json({ errorMessage: 'Error retrieving users' }); // Error de servidor
    }
};



    module.exports = { updateUser, deleteUser,getUsers}