const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Timer = require("../models/Timer.model");

const router = express.Router();

router.post("/timers", (req, res, next) => {
  const { title, project } = req.body;
});
