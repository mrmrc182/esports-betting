import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="center">

      <div>
        <h4 className="credit-score">Credits: 1000</h4>
      </div>

      <br></br>
      <h1>Open Bets</h1>
      <div className="open-cards">
        <Container className="container-width">
          <Accordion>
            <Accordion.Item className="center prof-cards" eventKey="0">
              <Accordion.Header className="header">
                FaZe vs Cloud9
              </Accordion.Header>
              <Accordion.Body>Picked to Win: FaZe</Accordion.Body>
              <Accordion.Body>Bet Amount: 400</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="prof-cards">
              <Accordion.Header>FaZe vs South Korea</Accordion.Header>
              <Accordion.Body>Picked to Win: South Korea</Accordion.Body>
              <Accordion.Body>Bet Amount: 400</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <div className="closed-cards">
        <Container className="container-width">
          <br></br>
          <h1>Closed Bets</h1>
          <Accordion>
            <Accordion.Item eventKey="0" className="prof-cards">
              <Accordion.Header>FaZe vs Cloud9</Accordion.Header>
              <Accordion.Body>Winner: FaZe</Accordion.Body>
              <Accordion.Body>Bet Amount: 400</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="prof-cards">
              <Accordion.Header>FaZe vs South Korea</Accordion.Header>
              <Accordion.Body>Winner: South Korea</Accordion.Body>
              <Accordion.Body>Bet Amount: 400</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </div >
  );
}
