import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Comments from "./components/comments/Comments";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Register from "./components/Register/Register";
import Booking from "./components/booking/Booking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
      <Comments />
      <Contact />
      <Footer />
      <Register />
      <Booking />
    </div>
  );
}

export default App;
