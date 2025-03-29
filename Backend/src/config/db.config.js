const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch{
        console.error('Failed to connect to MongoDB');
        process.exit(1);
    }
}

module.exports = connectDB;