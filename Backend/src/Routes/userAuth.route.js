const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator'); // ✅ Add this import
const cookieParser = require("cookie-parser");
const authRouter = express.Router();
const User = require("../model/user.schema");
require('dotenv').config();

// SignUp API
authRouter.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender } = req.body;

        if (!firstName || !lastName || !email || !password || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check existing email
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Validate password
        if (!validator.isStrongPassword(password, { minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
            return res.status(400).json({
                error: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.",
            });
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            gender,
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//login api
authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid Email" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        // Check valid password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
            const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });

            res.cookie("token", token, {
                expires: new Date(Date.now() + 60 * 60 * 1000),
               
            });

            res.json({ message: "User logged in successfully", data: user });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = authRouter;
