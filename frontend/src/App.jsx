import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layouts";
import { ProfilePage } from "./pages/Profile";
import { WorkoutFormPage } from "./pages/WorkoutForm";
import { WorkoutListPage } from "./pages/WorkoutList";
import { ProgressGraphPage } from "./pages/ProgressGraph";

//Main App component
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/WorkoutForm" element={<WorkoutFormPage />} />
          <Route path="/WorkoutList" element={<WorkoutListPage />} />
          <Route path="/ProgressGraph" element={<ProgressGraphPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
