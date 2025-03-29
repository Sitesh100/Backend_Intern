const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const User = require("../model/user.schema");

const userAuth = async (req,res,next) => {
    try {

        const { token } = req.cookies;
        if(!token){
            throw new Error("No token, authorization denied");
        }

        const decodeMessage = await jwt.verify(token,process.env.JWT_SECRET);
        const { _id } = decodeMessage;

        const user = await User.findById(_id);
        if(!user){
            throw new Error("No user found, authorization denied");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = userAuth;