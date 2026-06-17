/**

const mongoose = require("../db");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);

**/
/**
const User = require("C:\Users\PasamTejaswee\OneDrive - IBM\Desktop\Learn\Database\users");

User.create({
  username: "admin",
  password: "admin123"
}).then(() => {
  console.log("User added");
});
**/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
