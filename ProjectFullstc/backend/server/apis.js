const express = require("express")

let apis = (app) => {
    app.use(express.json())
    app.use('/api/new-register', require('../routers/register'))
    app.use('/api/check-login', require('../routers/login'))
      
}

module.exports = apis