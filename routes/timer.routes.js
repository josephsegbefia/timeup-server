const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Timer = require("../models/Timer.model");
const User = require("../models/User.model");

const router = express.Router();

router.post("/timers", (req, res, next) => {
  const { user, title, project } = req.body;

  Timer.create({ title, project, user })
    .then((timer) => {
      return User.findByIdAndUpdate(user._id, {
        $push: { timers: timer._id }
      }).then(() => {
        res.status(200).json({ timer });
        //   res.redirect("/timers");
      });
    })
    .catch((error) =>
      res.status(500).json({ message: "Internal Server Error" })
    );
});

module.exports = router;
