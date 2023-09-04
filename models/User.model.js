const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  emailToken: { type: String },
  passwordResetToken: { type: String },
  timers: [{ type: Schema.Types.ObjectId, ref: "Timer" }]
});

module.exports = model("User", userSchema);
