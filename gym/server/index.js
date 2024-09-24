import express from "express";
import signup from "./routes/signup.js";
import login from "./routes/login.js";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt"; //  remove
import dotenv from "dotenv";
import User from "./models/user.js"; //  User model

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/defaultdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

//Routes
app.use("/api/signup", signup);
app.use("/api/login", login);

// Get all users route
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // User model
    res.status(200).json(users); // Return the users as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
