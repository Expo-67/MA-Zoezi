import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="  container home p-4 my-2  rounded-3">
      <h1 className="display-5">Tailored Workouts</h1>
      <p className="col-md-8">
        MaZoezi is designed to deliver personalized workout plans that evolve
        with your goals and progress. Whether you're a beginner or an
        experienced athlete, the app customizes routines based on your fitness
        level, preferences, and available time. With a focus on variety and
        adaptability,
      </p>
      <button className=" btn btn-dark btn-lg"> Get Started</button>
    </div>
  );
};

export default Home;
