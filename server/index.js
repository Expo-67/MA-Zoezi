import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/userRoutes.js"; // Import the user routes
import workoutRoutes from "./routes/workoutRoutes.js"; // Import the workout routes
import progressRoutes from "./routes/progressRoutes.js"; // Import the progress routes

dotenv.config(); //Load up env files

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // parse incoming request

//Defined routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/progress", progressRoutes);

app.listen(PORT, () => {
  connectDB().catch(() => {
    process.exit(1); //exit if there is database error
  });
  console.log("Server is running on port:", PORT);
});
