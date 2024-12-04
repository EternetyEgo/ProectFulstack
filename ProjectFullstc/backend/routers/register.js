const express = require("express");
const router = express.Router();
const { Register } = require("../modules/register");
const bcrypt = require("bcrypt");

router.post("/create", async (req, res) => {
  let { name, lastName, age, job, password } = req.body;
  const valid = await Register.findOne({ name: req.body.name });
  if (valid) return res.send("Bunday malumot bor");
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const data = await new Register({
    name,
    lastName,
    age,
    job,
    password: hashPassword,
  });

  await data.save();
  res.send(data);
});

router.get("/all", async (req, res) => {
  const allData = await Register.find();
  res.json({
    status: true,
    message: allData,
  });
});

router.post("/delete-data/:id", async (req, res) => {
  const data = await Register.deleteOne({ _id: req.params.id });
  res.json({
    status: 200,
    message: "ochirildi",
  });
});

router.post("/update-date/:id", async (req, res) => {
  try {
    await Register.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          lastName: req.body.lastName,
          age: req.body.age,
          job: req.body.job,
          password: req.body.password,
        },
      }
    );

    res.json({
      message: "Malumot ozgartirildi",
      status: true,
    });
  } catch (err) {
    res.status(503).json({
      message: "serverda hatolik",
      err,
      status: false,
    });
  }
});

router.get("/:id", async (req, res) => {
  const allData = await Register.findOne({_id: req.params.id});
  res.json({
    status: true,
    message: allData,
  });
});


module.exports = router;
