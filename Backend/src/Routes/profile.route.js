const express = require('express');
const profileRouter = express.Router();
const userAuth = require("../middleware/Auth");

profileRouter.get('/profile/view',userAuth, async (req, res) => {
    try {
        
        const user = req.user;

        res.json({
            message: "User Profile",
            user
        });

    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = profileRouter;