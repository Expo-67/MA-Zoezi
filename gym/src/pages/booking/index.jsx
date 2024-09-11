import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../components/header/Header";

const BookingPage = () => {
  return (
    <>
      <Header />
      <section className="vh-70">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone illustration"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <h1> Log in to MaZoezi</h1>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    name="email"
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    name="password"
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <a href="#forgot-password">Forgot password?</a>
                  <a href="#forgot-password">Create an account?</a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4"></div>

                {/* Social media buttons */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { BookingPage };
