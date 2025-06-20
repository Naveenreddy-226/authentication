const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/userroute'); // your auth route

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/sample', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes); // POST to /api/auth

// Start Server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
