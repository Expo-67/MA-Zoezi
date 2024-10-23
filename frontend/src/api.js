import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // make sure it fits backend URL

// Fetch user profile
export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Add a new workout
export const addWorkout = async (workoutData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/workouts`, workoutData);
    return response.data;
  } catch (error) {
    console.error("Error adding workout:", error);
    throw error;
  }
};

// Fetch progress data
export const fetchProgress = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/progress`);
    return response.data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    throw error;
  }
};
