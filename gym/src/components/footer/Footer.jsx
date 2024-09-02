import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-5 mt-5">
      <div className="container text-light text-center">
        <p className="display-5 mb-3">MaZoezi - Tailored workout plans</p>
        <small className="text-white-50">
          &copy; All rights reserved 2024.
        </small>
      </div>
    </div>
  );
};

export default Footer;
