import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    // Fields for workout tracking
    profilePicture: {
      type: String, // URL or image path
      default: "",
    },
    weeklyWorkouts: [
      {
        type: Schema.Types.ObjectID,
        ref: "Workout",
      },
    ],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
