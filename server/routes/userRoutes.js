import express from "express";
import { User } from "../models/user.model.js"; // Import the User model

const router = express.Router();

router.put("/:id", async (req, res) => {
  // Extract name and profilePicture from the request body
  const { name, profilePicture } = req.body;

  try {
    // Find the user by ID and update their name and profile picture
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // Get the user ID from the request URL
      { name, profilePicture }, // Update the name and profilePicture fields
      { new: true } // Return the updated document
    );

    // Send the updated user data back as the response
    res.json(updatedUser);
  } catch (error) {
    // If an error occurs, send a 500 (server error)
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
