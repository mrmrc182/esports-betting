import React, { useState, useEffect } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "../styles/Matches.css";
import { useQuery, useMutation } from "@apollo/client";
import { UPCOMING_MATCHES } from "../util/queries";
import { PLACE_BET } from "../util/mutations";

export default function MatchCard(props) {
  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState();
  const [betAmount, setBetAmount] = useState("");
  const [placeBet] = useMutation(PLACE_BET);
  const [isActiveA, setIsActiveA] = useState(false);
  const [isActiveB, setIsActiveB] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setBetAmount(inputValue);
  };

  const handlePlaceBet = async () => {
    try {
      const userId = props.userId;
      const matchId = props.matchId;
      const amount = parseInt(betAmount);
      const teamA = props.teamAName;
      const teamB = props.teamBName;
      let choiceName = "";
      if (choice === props.teamAId) {
        choiceName = props.teamAName;
      }
      if (choice === props.teamBId) {
        choiceName = props.teamBName;
      }
      console.log(teamA, teamB, choiceName);
      await placeBet({
        variables: { userId, choice, matchId, amount, teamA, teamB, choiceName },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setChoiceA = () => {
    setChoice(props.teamAId);
    setIsActiveA(current => !current);
    setIsActiveB(false);
  };
  const setChoiceB = () => {
    setChoice(props.teamBId);
    setIsActiveB(current => !current);
    setIsActiveA(false);
  };
  console.log(choice);

  return (
    <div className="match-card-container">
      <div className="match-cards">
        <div className="match-date">
          {props.date}
          {props.liveUrl ? (
            <Button
              href={props.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-primary"
              className="watch-live"
            >
              Watch Live
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <Card style={{ width: "18rem" }} onClick={handleShow}>
          <Card.Img className="team-image" variant="top" src={props.teamAUrl} />
          <Card.Body>
            <Card.Title className="title">{props.teamAName}</Card.Title>
          </Card.Body>
        </Card>

        <div className="vs">
          <h2>VS</h2>
        </div>

        <Card style={{ width: "18rem" }} onClick={handleShow}>
          <Card.Img className="team-image" variant="top" src={props.teamBUrl} />
          <Card.Body>
            <Card.Title className="title">{props.teamBName}</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <Modal className="modal-cont" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>
            {props.teamAName} vs {props.teamBName}
          </Modal.Title>
          <div className="match-date-title">{props.date}</div>
        </Modal.Header>
        <Modal.Body className="match-modal">
          <Card style={{ width: "18rem", outline: isActiveA ? '5px solid var(--orange)' : '' }} onClick={setChoiceA} className="team-card">
            <Card.Img className="team-image" variant="top" src={props.teamAUrl} />
            <Card.Body>
              <Card.Title>{props.teamAName}</Card.Title>
            </Card.Body>
          </Card>

          <div className="vs">
            <h2>VS</h2>
          </div>

          <Card style={{ width: "18rem", outline: isActiveB ? '5px solid var(--orange)' : '' }} onClick={setChoiceB} className="team-card">
            <Card.Img className="team-image" variant="top" src={props.teamBUrl} />
            <Card.Body>
              <Card.Title>{props.teamBName}</Card.Title>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Form className="bet-form">
            <Form.Group className="mb-3" controlId="formBetInput">
              <Form.Label>Place your bet:</Form.Label>
              <Form.Control
                value={betAmount}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your bet"
              />
            </Form.Group>
            <Button
              onClick={() => {
                handlePlaceBet();
                handleClose();
              }}
              variant="primary"
              className="bet-btn"
            >
              Place Bet
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
