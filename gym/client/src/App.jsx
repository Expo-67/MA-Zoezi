import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import { LoginPage } from "./pages/booking/Login";
import { SignUpPage } from "./pages/register/Signup";
import { DashboardPage } from "./pages/dashboard";
import { GoalsPage } from "./pages/goal/Goal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/goals" element={<GoalsPage />} />
    </Routes>
  );
}

export default App;
