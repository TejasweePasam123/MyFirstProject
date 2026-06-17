// /**
// const express = require("express");
// const bodyParser = require("body-parser");

// require("C:\Users\PasamTejaswee\OneDrive - IBM\Desktop\Learn\Database\db");                 // MongoDB connection
// const User = require("C:\Users\PasamTejaswee\OneDrive - IBM\Desktop\Learn\Database\users"); // User model


// //const express = require("express");
// const cors = require("cors");

// const app = express();

// // ✅ Proper CORS handling
// app.use(cors());

// // ✅ Parse JSON body
// app.use(express.json());
// /**

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     console.log("Received:", username, password);

//     if (username === "admin" && password === "password123") {
//         res.json({ message: "Login successful" });
//     } else {
//         res.status(401).json({ message: "Invalid credentials" });
//     }
// });

// app.listen(3000, () => {
//     console.log("Backend running on http://localhost:3000");
// });
// **/
// /**
// app.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find user in MongoDB
//     const user = await User.findOne({ username: username });

//     if (!user) {
//       return res.json({ message: "Invalid credentials" });
//     }

//     // Compare password (plain for now)
//     if (user.password === password) {
//       return res.json({ message: "Login successful" });
//     } else {
//       return res.json({ message: "Invalid credentials" });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// **/
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔗 MongoDB connection



// /**mongoose.connect(
//   "mongodb+srv://tejaswee:<db_password>@cluster0.lfwormv.mongodb.net/?appName=Cluster0",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
// **/
// mongoose.connect("mongodb+srv://pasam_tejaswee:IeJeQLrCaf4XfPiX@cluster0.lfwormv.mongodb.net/?appName=Cluster0")
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error("MongoDB error:", err));


// // 👤 User schema
// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model("User", UserSchema);

// // 🔐 Login API
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ username, password });

//   if (user) {
//     res.json({ message: "Login successful" });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Backend running on http://localhost:3000");
// });

// app.post("/register", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     await User.create({ username, password });

//     res.json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.post("/register", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Insert into MongoDB
//     await User.create({ username, password });

//     res.json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
