import React from "react";
import { Container, Accordion, Image } from "react-bootstrap";
import "../styles/Profile.css";
import { BETS, ME, CURRENCY } from "../util/queries";
import { useQuery } from "@apollo/client";
import BetAccordion from "../components/BetAccordion";

export default function Profile() {

  const { loading, data } = useQuery(BETS, {
    fetchPolicy: "no-cache",
  });
  console.log(loading, data);

  const meQuery = useQuery(ME, {
    fetchPolicy: "no-cache",
  });
  console.log("me", meQuery.loading, meQuery.data);

  const currencyQuery = useQuery(CURRENCY, {
    fetchPolicy: "no-cache",
  });
  console.log("currency", currencyQuery.loading, currencyQuery.data);

  return (
    <div className="center">
      {loading ? (<div>loading...</div>) : (
        <div className="prof-container">

          {/* Side bar for profile info */}
          <div className="side-bar">
            {meQuery.loading ? (<div></div>) : (<h3>{meQuery.data.me.username}</h3>)}
            <div>
              <Image aria-label="user avatar"></Image>
            </div>
            <div>
              {currencyQuery.loading ? (<div></div>) : (<h4 className="credit-score">Credits: {currencyQuery.data.currency.amount}</h4>)}
            </div>
          </div>

          {/* Body container for profile bets */}
          <div className="prof-body">

            <div className="body-el">
              <div className="prof-box">
                <h1 className="open-title">Open Bets</h1>

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
                    <h1 className="closed-title">Closed Bets</h1>
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
            </div>
          </div>
        </div>
      )}

    </div>
  );
}