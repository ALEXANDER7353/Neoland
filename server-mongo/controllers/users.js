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

module.exports = { updateUser, deleteUser }