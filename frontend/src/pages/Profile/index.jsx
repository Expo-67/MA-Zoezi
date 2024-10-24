import React, { useState, useEffect } from "react";
import { getProfileData, updateProfileData } from "../../services/api"; // the Api functions

const ProfilePage = ({ userId }) => {
  //State to hold profile data
  const [profile, setProfile] = useState({ name: "", profilePicture: "" });
  const [selectedFile, setSelectedFile] = useState(null); //handles file upload
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfileData(userId); //fetch profile data from backend
        setProfile(data); // update profile state with fetched data
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);
  // Handle form submit to update profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to include the profile picture file
    const formData = new FormData();
    formData.append("name", profile.name);
    if (selectedFile) {
      formData.append("profilePicture", selectedFile); // Add the selected file
    }

    try {
      await updateProfileData(userId, formData); // Send the updated data to backend
      alert("Profile updated successfully");
    } catch (err) {
      setError("Failed to update profile");
    }
  };
  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update the selected file state
  };

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="center">
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="center">
          <label>Profile Picture:</label>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              margin: "10px 0",
            }}
          />
          <input type="file" onChange={handleFileChange} />
        </div>

        {/* Name Input */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        {/* Save Button */}
        <div>
          <button type="submit">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export { ProfilePage };
