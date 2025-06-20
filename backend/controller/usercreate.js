const User = require('../models/usermodel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { user, email, password ,role} = req.body;

        // Check if all fields are provided
        if (!user || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = new User({
            user,
            email,
            password: hashedPassword,
            role:role,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};

module.exports = { register };
