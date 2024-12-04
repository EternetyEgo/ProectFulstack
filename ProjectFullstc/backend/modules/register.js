const mongoose = require("mongoose")

const register = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

const Register = mongoose.model('Register', register)

module.exports.Register = Register