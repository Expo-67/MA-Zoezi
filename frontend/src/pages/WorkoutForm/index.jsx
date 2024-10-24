import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

// Workout input form
const WorkoutFormPage = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [exerciseList, setExerciseList] = useState([
    { name: "", reps: 0, sets: 0 },
  ]);

  const handleAddExercise = () => {
    setExerciseList([...exerciseList, { name: "", reps: 0, sets: 0 }]);
  };

  const handleInputChange = (index, field, value) => {
    const newList = [...exerciseList];
    newList[index][field] = value;
    setExerciseList(newList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const workoutData = {
      workoutName,
      workoutDuration,
      exercises: exerciseList,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/workouts",
        workoutData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your JWT token if needed
          },
        }
      );
      console.log(response.data); // Handle success (optional)
      // You can reset the form or show a success message here
    } catch (error) {
      console.error("Error adding workout:", error);
      // Handle error (show an error message to the user)
    }
  };

  return (
    <div>
      <h2>Workout Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Workout Name */}
        <div>
          <label>Workout Name:</label>
          <input
            type="text"
            placeholder="Enter workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)} // Capture workout name
          />
        </div>

        {/* Workout Duration */}
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            placeholder="Enter duration"
            value={workoutDuration}
            onChange={(e) => setWorkoutDuration(Number(e.target.value))} // Capture workout duration
          />
        </div>

        {/* Exercises */}
        <div>
          <h3>Exercises</h3>
          {exerciseList.map((exercise, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Exercise Name"
                value={exercise.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                } // Update exercise name
              />
              <input
                type="number"
                placeholder="Reps"
                value={exercise.reps}
                onChange={(e) =>
                  handleInputChange(index, "reps", Number(e.target.value))
                } // Update exercise reps
              />
              <input
                type="number"
                placeholder="Sets"
                value={exercise.sets}
                onChange={(e) =>
                  handleInputChange(index, "sets", Number(e.target.value))
                } // Update exercise sets
              />
            </div>
          ))}
          <button type="button" onClick={handleAddExercise}>
            Add Exercise
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit Workout</button>
        </div>
      </form>
    </div>
  );
};

export { WorkoutFormPage };
