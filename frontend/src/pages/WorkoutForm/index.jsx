import React, { useState } from "react";

//workout input form
const WorkoutFormPage = () => {
  const [exerciseList, setExerciseList] = useState([
    { name: "", reps: 0, sets: 0 },
  ]);

  const handleAddExercise = () => {
    setExerciseList([...exerciseList, { name: "", reps: 0, sets: 0 }]);
  };

  return (
    <div>
      <h2>Workout Form</h2>
      <form>
        {/* Workout Name */}
        <div>
          <label>Workout Name:</label>
          <input type="text" placeholder="Enter workout name" />
        </div>

        {/* Workout Duration */}
        <div>
          <label>Duration (minutes):</label>
          <input type="number" placeholder="Enter duration" />
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
                onChange={(e) => {
                  const newList = [...exerciseList];
                  newList[index].name = e.target.value;
                  setExerciseList(newList);
                }}
              />
              <input
                type="number"
                placeholder="Reps"
                value={exercise.reps}
                onChange={(e) => {
                  const newList = [...exerciseList];
                  newList[index].reps = Number(e.target.value);
                  setExerciseList(newList);
                }}
              />
              <input
                type="number"
                placeholder="Sets"
                value={exercise.sets}
                onChange={(e) => {
                  const newList = [...exerciseList];
                  newList[index].sets = Number(e.target.value);
                  setExerciseList(newList);
                }}
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
