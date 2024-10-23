import React from "react";

// ProfilePage component UI with profile details form
const ProfilePage = () => {
  return (
    <div className="center">
      <h2>Profile Page</h2>
      <form>
        {/* Profile Picture */}
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
          <input type="file" />
        </div>

        {/* Name Input */}
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
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
