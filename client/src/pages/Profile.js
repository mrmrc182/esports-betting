import React from "react";
import { Accordion } from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <h1>Hello username!</h1>
      <br></br>
      <h1>Open Bets</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>FaZe vs Cloud9</Accordion.Header>
          <Accordion.Body>
            Winner:  FaZe
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>FaZe vs South Korea</Accordion.Header>
          <Accordion.Body>
            Winner:  South Korea
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    <br></br>
      <h1>Closed Bets</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>FaZe vs Cloud9</Accordion.Header>
          <Accordion.Body>
            Winner:  FaZe
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>FaZe vs South Korea</Accordion.Header>
          <Accordion.Body>
            Winner:  South Korea
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
