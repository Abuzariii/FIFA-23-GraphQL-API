const mongoose = require("mongoose");

const makeupUserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  orders: Array,
  // Add other fields specific to makeup user details
});

module.exports = mongoose.model(
  "MakeupUser",
  makeupUserSchema,
  "makeup users orders"
);
