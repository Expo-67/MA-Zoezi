import axios from "axios";

//  axios instance with baseURL to avoid repeating the URL
const api = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
});

//Fetch profile data from backend
export const getProfileData = async (userId) => {
  try {
    const response = await api.get(`/profile/${userId}`); // the backend route
    return response.data;
  } catch (error) {
    console.error("Error fetching profile data", error);
    throw error;
  }
};

// Update profile data, including name and profile picture
export const updateProfileData = async (userId, formData) => {
  try {
    const response = await api.put(`/profile/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file upload
      },
    });
    return response.data; // Return updated profile data from the response
  } catch (error) {
    throw new Error("Error updating profile data");
  }
};
