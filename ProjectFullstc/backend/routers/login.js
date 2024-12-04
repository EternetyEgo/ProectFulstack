const express = require("express");
const router = express.Router();
const { Login } = require("../modules/login");
const bcrypt = require("bcrypt");

router.post("/create", async (req, res) => {
  let { name, password } = req.body;
  const valid = await Login.findOne({ name: req.body.name, });
  if (valid) return res.send("Bunday malumot bor");
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const data = await new Login({
    name,
    password: hashPassword,
  });

  await data.save();
  res.send(data);
});


router.get("/all", async (req, res) => {
  const allData = await Login.find()
  res.json({
    status: true,
    message: allData,
  });
});


module.exports = router;