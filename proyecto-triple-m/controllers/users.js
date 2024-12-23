const User = require ('../models/users');


const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await User.create({ name, email, password });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error( error);
        res.status(500).json({ message: 'Server error' });
    }
};


const readUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        }


        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


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




module.exports = {createUser,readUser,updateUser,deleteUser};