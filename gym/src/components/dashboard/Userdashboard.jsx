import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import "./dashboard.css";

const Dashboard = () => {
  // Sample data for the chart and progress bars
  const workoutData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Workout Progress",
        data: [70, 50, 60, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  const weeklyProgress = 70; // Weekly workout progress in percentage
  const monthlyProgress = 85; // Monthly workout progress in percentage

  return (
    <Container fluid className="dashboard">
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} className="bg-dark text-light sidebar p-3">
          <div className="text-center mb-4">
            <FaUserCircle size={80} />
            <h5 className="mt-3">Hello, Mark</h5>
          </div>
          <ul className="list-unstyled">
            <li>
              <Button variant="link" className="text-light">
                Set My Goal
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-light">
                Achievements
              </Button>
            </li>
          </ul>
        </Col>

        {/* Main content */}
        <Col xs={12} md={9} className="p-4 bg-light">
          {/* Workout Progress Chart */}
          <Card className="mb-4">
            <Card.Body>
              <h6>Workout Progress</h6>
              <div style={{ height: "300px", width: "100%" }}>
                <Chart type="bar" data={workoutData} options={options} />
              </div>
            </Card.Body>
          </Card>

          {/* Quick Stats */}
          <Card className="mb-4">
            <Card.Body>
              <h6>Quick Stats</h6>
              <p>Weekly Progress</p>
              <ProgressBar now={weeklyProgress} label={`${weeklyProgress}%`} />
              <p className="mt-4">Monthly Progress</p>
              <ProgressBar
                now={monthlyProgress}
                label={`${monthlyProgress}%`}
              />
            </Card.Body>
          </Card>

          {/* Sign out and profile */}
          <div className="d-flex justify-content-between">
            <Button variant="primary">Adjust Profile</Button>
            <Button variant="danger">Sign Out</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
