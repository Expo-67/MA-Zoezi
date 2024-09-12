import React from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        "Error: " + (error.response?.data?.message || "Something went wrong")
      );
    }
  };
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

            <h3 className="text-center mb-3">Sign Up</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="#">Already have an account? Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignUpPage };
