import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  completedWorkouts: {
    type: Number,
    default: 0,
  },
  weekStart: {
    type: Date,
    default: Date.now,
  },
});

export const Progress = mongoose.model("Progress", progressSchema);
