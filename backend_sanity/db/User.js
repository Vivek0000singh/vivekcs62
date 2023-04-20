const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("users", userScehma);
