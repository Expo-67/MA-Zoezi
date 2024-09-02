import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Comments from "./components/comments/Comments";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
