import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../styles/Matches.css";
import { useQuery } from "@apollo/client";
import { UPCOMING_MATCHES } from "../util/queries";

export default function Matches() {
  const { data } = useQuery(UPCOMING_MATCHES);
  const matchList = data?.upcomingMatches || [];
  console.log(matchList, data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="match-cont">
      <div id="parent">
        <h1>Match-ups</h1>

        <div id="match-cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "assets/images/faze.jpeg"}
            />
            <Card.Body>
              <Card.Title>Team A</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "assets/images/cloud9.jpeg"}
            />
            <Card.Body>
              <Card.Title>Team B</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="match-modal">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "assets/images/faze.jpeg"}
            />
            <Card.Body>
              <Card.Title>Team A</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div>
            <h2>VS</h2>
          </div>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "assets/images/cloud9.jpeg"}
            />
            <Card.Body>
              <Card.Title>Team B</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
