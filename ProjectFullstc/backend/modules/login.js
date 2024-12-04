const mongoose = require("mongoose")

const login = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

const Login = mongoose.model('Login', login)

module.exports.Login = Login