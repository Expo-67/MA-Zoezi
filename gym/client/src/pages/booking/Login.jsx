import React from "react";
import Header from "../../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const LoginPage = () => {
  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div
          className="card shadow p-3 mb-5 bg-white rounded"
          style={{ width: "350px" }}
        >
          <div className="card-body">
            <div className="text-center mb-4">
              <img
                src="https://material.io/design/assets/images/homepage/hero_wave_animated.jpg"
                alt="Material Design"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>

            <h3 className="text-center mb-3">Login</h3>

            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="#">Forgot password?</a>
              <br />
              <a href="#">Don't have an account? Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
