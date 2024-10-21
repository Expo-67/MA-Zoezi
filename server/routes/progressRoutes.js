import express from "express";
import { Progress } from "../models/progress.js"; // Import the Progress model
import { Workout } from "../models/workout.js"; // Import the Workout model

const router = express.Router();

// @route GET /api/progress/:userId
// @desc Calculate and retrieve user's workout progress
// @access Private
router.get("/:userId", async (req, res) => {
  try {
    // Find all completed workouts for the user (completed: true)
    const workouts = await Workout.find({
      userId: req.params.userId, // Get the user ID from the request URL
      completed: true,
    });

    // Calculate the number of completed workouts
    const completedWorkouts = workouts.length;

    // Try to find an existing progress document for the user
    let progress = await Progress.findOne({ userId: req.params.userId });

    if (!progress) {
      // If no progress document exists, create a new one
      progress = new Progress({
        userId: req.params.userId,
        completedWorkouts, // Set the completed workouts count
      });
    } else {
      // If a progress document exists, update the completed workouts count
      progress.completedWorkouts = completedWorkouts;
    }

    // Save the progress document to the database
    await progress.save();

    // Send the progress data as the response
    res.json(progress);
  } catch (error) {
    // If an error occurs, send a 500 (server error) response with a message
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
