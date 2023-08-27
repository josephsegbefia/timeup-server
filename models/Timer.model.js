const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const timerSchema = new Schema({
  title: { type: String, required: true },
  project: { type: String, required: true },
  elapsed: { type: Number, default: 0 },
  runningSince: { type: Number, default: null }
});

module.exports = model("Timer", timerSchema);
