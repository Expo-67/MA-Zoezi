import React from "react";
import "./comments.css";
import bill from "../comments/images/bill.jpg";
import powerlift from "../comments/images/powerlift.jpg";
import crossfit from "../comments/images/crossfit.jpg";
const Comments = () => {
  return (
    <div>
      <div className="card dark">
        <img src={bill} className="card-img-top" alt="card image2" />
        <div className="card-body">
          <div className="text-section">
            <h5 className="card-title fw-bold">Hypertrophy</h5>
            <p className="card-text">
              Customize a workout just tailored for you for absolute strength in
              the three main lifts squats, bench and deadlift .
            </p>
          </div>
          <div className="cta-section">
            <a href="#" className="btn  btn-light">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="card dark">
        <img src={powerlift} className="card-img-top" alt="card image2" />
        <div className="card-body">
          <div className="text-section">
            <h5 className="card-title fw-bold">Power lifting</h5>
            <p className="card-text">
              Customize a workout just tailored for you for absolute strength in
              the three main lifts squats, bench and deadlift .
            </p>
          </div>
          <div className="cta-section">
            <a href="#" className="btn btn-light">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="card dark">
        <img src={crossfit} className="card-img-top" alt="card image2" />
        <div className="card-body">
          <div className="text-section">
            <h5 className="card-title fw-bold">Cross-fit</h5>
            <p className="card-text">
              Customize a varied function movements at high intensity like
              burpee, pull-up, kettlebell swings and many more
            </p>
          </div>
          <div className="cta-section">
            <a href="#" className="btn btn-light">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
