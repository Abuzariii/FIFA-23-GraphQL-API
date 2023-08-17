const mongoose = require("mongoose");

const makeupUserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  fullName: String,
  contactNo: String,
  address: String,
  // Add other fields specific to makeup user details
});

module.exports = mongoose.model(
  "MakeupUser",
  makeupUserSchema,
  "makeup users details"
);
