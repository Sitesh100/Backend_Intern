const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        email: {
            type: String,
            require:true,
            unique: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Invalid email: ' + value);
                }
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            validate(value) {
                if(!validator.isStrongPassword(value)){
                    throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
                }
            }
        },
        gender: {
            type: String,
            required: true,
            enum: {
                values: ["male", "female", "other"],
                message: `{VALUE} is an incorrect gender type`
            },
        },
        photoUrl:{
            type: String
        }
        ,about:{
            type: String,
            default: "this is dummy about data ..."
        }
})

module.exports = mongoose.model('User', userSchema);