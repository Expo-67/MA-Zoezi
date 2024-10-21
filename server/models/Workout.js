import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
});

const workoutSchema = new mongoose.Schema(
  {
    userId: {
      // New field to associate the workout with a user
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    workoutName: { type: String, required: true },
    workoutDuration: { type: Number, required: true },
    exercises: [exerciseSchema],
  },
  { timestamps: true }
); // Optional: adds createdAt and updatedAt timestamps

// Create a model from the workout schema
const Workout = mongoose.model("Workout", workoutSchema);

// Export the Workout model
export { Workout };
