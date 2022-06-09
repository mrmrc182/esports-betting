
import React, { useState, useEffect } from 'react';
import { Card, Modal, Button, Form } from 'react-bootstrap';
import '../styles/Matches.css'
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

                <div id="match-cards" onClick={handleShow}>
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

                    <div className='vs'>
                        <h2>
                            VS
                        </h2>
                    </div>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/cloud9.jpeg'} />
                        <Card.Body>
                            <Card.Title>Team B</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>


            <Modal className='modal-cont' show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>Team A vs Team B</Modal.Title>
                </Modal.Header>
                <Modal.Body className='match-modal'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/faze.jpeg'} />
                        <Card.Body>
                            <Card.Title>Team A</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className='vs'>
                        <h2>
                            VS
                        </h2>
                    </div>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/cloud9.jpeg'} />
                        <Card.Body>
                            <Card.Title>Team B</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Form className='bet-form'>
                        <Form.Group className="mb-3" controlId="formBetInput">
                            <Form.Label>Place your bet:</Form.Label>
                            <Form.Control type="text" placeholder="Enter your bet" />
                        </Form.Group>
                        <Button variant="primary" className='bet-btn'>
                            Place Bet
                        </Button>
                    </Form>
                </Modal.Footer>
            </Modal>
        </div>
    )

}



