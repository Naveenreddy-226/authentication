const User = require('../models/usermodel');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { user, password } = req.body;

        // Check if all fields are provided
        if (!user || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find user by username
        const existingUser = await User.findOne({ user });

        if (!existingUser) {
            return res.status(401).json({ message: 'User not found.' });
        }

        // Compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password.' });
        }

        // Success
        return res.status(200).json({ message: 'Login successful', user: existingUser });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = login;
