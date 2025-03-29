const validator = require('validator');

const validateSignUpData = (req,res) =>{
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName){
        return res.status(400).json({error: 'First name and last name are required'});
    }else if(!validator.isEmail(email)){
        return res.status(400).json({error: 'Invalid email address'});
    }else if(!validator.isStrongPassword(password)){
        return res.status(400).json({error: 'Password must be at least 8 characters long'});
    }
}


module.exports = validateSignUpData;