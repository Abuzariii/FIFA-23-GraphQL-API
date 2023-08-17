const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  // Other fields you might have
});

module.exports = mongoose.model("User", userSchema, "makeup users");
