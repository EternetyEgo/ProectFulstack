const mongoose = require("mongoose");

let serverDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/projectPro")
    .then(() => {
      console.log("mongo ishladi");
    })
    .catch((err) => {
      console.log("Mongoda hatolik bor", err);
    });
};


module.exports = serverDB