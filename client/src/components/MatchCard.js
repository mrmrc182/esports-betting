import React, { useState, useEffect } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "../styles/Matches.css";
import { useQuery } from "@apollo/client";
import { UPCOMING_MATCHES } from "../util/queries";

export default function MatchCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="match-card-container">
      <div className="match-cards" onClick={handleShow}>
        <div>{props.date}</div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.teamAUrl} />
          <Card.Body>
            <Card.Title>{props.teamAName}</Card.Title>
          </Card.Body>
        </Card>

        <div className="vs">
          <h2>VS</h2>
        </div>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.teamBUrl} />
          <Card.Body>
            <Card.Title>{props.teamBName}</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <Modal className="modal-cont" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>
            {props.teamAName} vs {props.teamBName}
          </Modal.Title>
          <div>{props.date}</div>
        </Modal.Header>
        <Modal.Body className="match-modal">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.teamAUrl} />
            <Card.Body>
              <Card.Title>{props.teamAName}</Card.Title>
            </Card.Body>
          </Card>

          <div className="vs">
            <h2>VS</h2>
          </div>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.teamBUrl} />
            <Card.Body>
              <Card.Title>{props.teamBName}</Card.Title>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Form className="bet-form">
            <Form.Group className="mb-3" controlId="formBetInput">
              <Form.Label>Place your bet:</Form.Label>
              <Form.Control type="text" placeholder="Enter your bet" />
            </Form.Group>
            <Button variant="primary" className="bet-btn">
              Place Bet
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
