const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/userroute'); // your auth route
const dotenv=require('dotenv')
dotenv.config()
// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes); // POST to /api/auth

// Start Server
app.listen(3000||process.env.port, () => {
    console.log("Server started on http://localhost:3000");
});
