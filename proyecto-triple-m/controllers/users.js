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


module.exports = {createUser };