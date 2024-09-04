import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Comments from "./components/comments/Comments";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/login/Login";

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
      <Login />
    </div>
  );
}

export default App;
