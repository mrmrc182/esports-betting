import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../styles/Profile.css";
import { BETS } from "../util/queries";
import { useQuery } from "@apollo/client";
import BetAccordion from "../components/BetAccordion";

export default function Profile() {

  const {loading, data} = useQuery(BETS, {
    fetchPolicy: "no-cache",
  });
  console.log(loading, data);

  return (
    <div className="center">
      {loading ? (<div>loading...</div>) : (
        <div>
        <div>
          <h4 className="credit-score">Credits: 1000</h4>
        </div>
  
        <br></br>
        <h1>Open Bets</h1>

        <div className="open-cards">
          <Container className="container-width">
            <Accordion>
              {data.bets.slice(0).reverse().map((bet, index) => (
                <BetAccordion 
                  key={index}
                  eventKey={index}
                  teamA={bet.teamA}
                  teamB={bet.teamB}
                  choiceName={bet.choiceName}
                  amount={bet.amount}
                />
              ))}
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
        </div>
      )}

    </div>
  );
}
