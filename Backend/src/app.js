const express = require('express');
const connectDB = require("./config/db.config");
const cookieParser = require("cookie-parser");
const userAuth = require("./Routes/userAuth.route");

const app = express();

// Middleware
app.use(express.json()); 
app.use(cookieParser());

// api routes
app.use(userAuth); 

// Connect to the database
connectDB()
.then(() => {
    console.log('Connected to the database');
    app.listen(7777, () => {
        console.log('Server is running on port 7777');
    });
})
.catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1);
});
