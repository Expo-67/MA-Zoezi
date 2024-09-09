import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import { RegisterPage } from "./pages/register";
import { BookingPage } from "./pages/booking";
import { DashboardPage } from "./pages/dashboard";
import { GoalsPage } from "./pages/goal/Goal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/goals" element={<GoalsPage />} />
    </Routes>
  );
}

export default App;
