import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="center">
      <br></br>
      <h1>Hello username!</h1>
      <br></br>
      <h1>Open Bets</h1>
      <div className="open-cards">
        <Container className="container-width">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="center prof-cards" eventKey="0">
              <Accordion.Header className="header">
                FaZe vs Cloud9
              </Accordion.Header>
              <Accordion.Body>Winner: FaZe</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="prof-cards">
              <Accordion.Header>FaZe vs South Korea</Accordion.Header>
              <Accordion.Body>Winner: South Korea</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <div className="closed-cards">
        <Container className="container-width">
          <br></br>
          <h1>Closed Bets</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="prof-cards">
              <Accordion.Header>FaZe vs Cloud9</Accordion.Header>
              <Accordion.Body>Winner: FaZe</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="prof-cards">
              <Accordion.Header>FaZe vs South Korea</Accordion.Header>
              <Accordion.Body>Winner: South Korea</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </div >
  );
}
