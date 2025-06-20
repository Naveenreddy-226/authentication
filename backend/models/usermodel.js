const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true,
        trim: true // optional: removes leading/trailing spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // optional: ensures email is stored in lowercase
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'] // optional: restricts role values
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);
