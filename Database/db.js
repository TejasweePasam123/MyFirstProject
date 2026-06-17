const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("❌ MongoDB connection failed");
});

db.once("open", () => {
  console.log("✅ MongoDB connected successfully");
});

module.exports = mongoose;
