const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Timer = require("../models/Timer.model");
const User = require("../models/User.model");

const router = express.Router();

// Create a timer for a logged in user
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
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//Get a user's timers
router.get("/:user/timers", (req, res, next) => {
  const { user } = req.params;
  Timer.find({ user })
    .then((timers) => {
      res.status(200).json(timers);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//Edit a user's timers
router.post("/:user/timers/:timerId/edit", async (req, res, next) => {
  try {
    const { user, timerId } = req.params;
    const { title, project } = req.body;

    const timer = await Timer.findOne({ _id: timerId, user });

    // Verify a timers existence
    if (!timer) {
      return res.status(404).json({ message: "Timer does not exist" });
    }

    // Update the fields
    timer.title = title;
    timer.project = project;

    //Save the timer
    const updatedTimer = await timer.save();
    res.status(200).json(updatedTimer);
  } catch (error) {
    console.log("Error updating the card:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Start timer
router.post("/users/:user/timers/:timerId/start", async (req, res, next) => {
  try {
    const { user, timerId } = req.params;
    const timer = await Timer.findOne({ _id: timerId, user });
    if (!timer) {
      return res.status(404).json({ message: "Timer does not exist" });
    }
    timer.runningSince = req.body.start;
    const startedTimer = await timer.save();
    res.status(200).json(startedTimer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
