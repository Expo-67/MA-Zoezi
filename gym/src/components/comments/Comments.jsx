import React from "react";
import "./comments.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Comments = () => {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Body Building</Card.Title>
          <Card.Text>
            Tailor your own physical exercise in order to strengthen and enlarge
            the muscles of the body.
          </Card.Text>
          <Button variant="dark">Begin</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Crossfit</Card.Title>
          <Card.Text>
            Customize a varied function movements at high intensity like burpee,
            pull-up, kettlebell swings and many more.
          </Card.Text>
          <Button variant="dark">Begin</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Powerlift</Card.Title>
          <Card.Text>
            Customize a workout just tailored for you for absolute strength in
            the three main lifts squats, bench and deadlift.
          </Card.Text>
          <Button variant="dark">Begin</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comments;
