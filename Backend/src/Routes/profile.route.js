const express = require('express');
const profileRouter = express.Router();
const userAuth = require("../middleware/Auth");
const User = require ("../model/user.schema")

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

profileRouter.get('/profile/update',userAuth, async (req, res) => {
        try {
            const userId = req.user._id;
            const updateData = req.body;
          const  allowedData = ["firstName", "lastName", "about","photoUrl"];
          const isAllowedData = Object.keys(req.body).every((key) => allowedData.includes(key));
          if(!isAllowedData){
            return res.status(400).json({ error: "Invalid data provided" });
          }
          const user = await User.findByIdAndUpdate(userId, updateData , { new: true });
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
          res.json({
            message: "User Profile Updated",
            user
          });
        } catch (error) {
            console.error("Internal Server Error:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
})

module.exports = profileRouter;