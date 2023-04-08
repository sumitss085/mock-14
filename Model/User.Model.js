const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: String,
  Gender: String,
  DOB: String,
  Email: String,
  Mobile: Number,
  initialBalnce: Number,
  AdharNo: Number,
  PanNo: String,
});
const Usermodel = mongoose.model("User", userSchema);
module.exports = Usermodel;
