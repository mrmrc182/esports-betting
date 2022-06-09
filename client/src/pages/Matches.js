import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Matches.css'

export default function Matches() {
    return (
        <div className='match-cont'>
            <div id='parent'>
                <h1>Match-ups</h1>

                <div id="match-cards">
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

                    <div>
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
        </div>
    )
}