import express from "express";
import { Workout } from "../models/workout.js"; // Import the Workout model

const router = express.Router();

// Define a route for posting the workout of the day
router.post("/workout-of-the-day", async (req, res) => {
  const { workoutName, workoutDuration, exercises } = req.body;

  try {
    // Create a new workout
    const newWorkout = new Workout({
      workoutName,
      workoutDuration,
      exercises,
    });

    // Save the workout to the database
    await newWorkout.save();
    res.status(201).json({
      success: true,
      message: "Workout created successfully",
      workout: newWorkout,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

// Export the router as the default export
export default router;
