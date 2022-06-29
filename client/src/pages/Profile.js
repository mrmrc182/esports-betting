import React from "react";
import { Container, Accordion, Image } from "react-bootstrap";
import "../styles/Profile.css";
import { BETS, OPEN_BETS, CLOSED_BETS, ME, CURRENCY } from "../util/queries";
import { useQuery } from "@apollo/client";
import BetAccordion from "../components/BetAccordion";

export default function Profile() {

  const betQuery = useQuery(BETS, {
    fetchPolicy: "no-cache",
  });
  console.log("bets", betQuery.loading, betQuery.data);

  const openBetQuery = useQuery(OPEN_BETS, {
    fetchPolicy: "no-cache",
  });
  console.log("open bets", openBetQuery.loading, openBetQuery.data);

  const closedBetQuery = useQuery(CLOSED_BETS, {
    fetchPolicy: "no-cache",
  });
  console.log("closed bets", closedBetQuery.loading, closedBetQuery.data);


  const currencyQuery = useQuery(CURRENCY, {
    fetchPolicy: "no-cache",
  });
  console.log("currency", currencyQuery.loading, currencyQuery.data);

  const meQuery = useQuery(ME, {
    // skip cache for demonstration
    fetchPolicy: "no-cache",
  });
  console.log(meQuery.loading, meQuery.data);

  return (
    <div className="center">

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
                {(openBetQuery.loading) ? (<div>loading...</div>) : (
                  <Container className="container-width">
                    <Accordion>
                      {(openBetQuery.data.openBets.length === 0) ? (<></>) : (<div>{
                        openBetQuery.data.openBets.splice(0).reverse().map((bet, index) => (
                          <BetAccordion
                            key={index}
                            eventKey={index}
                            teamA={bet.teamA}
                            teamB={bet.teamB}
                            choiceName={bet.choiceName}
                            amount={bet.amount}
                          />
                        ))
                      }</div>
                      )}
                    </Accordion>
                  </Container>
                )}
              </div>

              <div className="closed-cards">
                {(closedBetQuery.loading) ? (<div>loading...</div>) : (
                  <Container className="container-width">
                    <h1 className="closed-title">Closed Bets</h1>
                    <Accordion>
                      {closedBetQuery.data.closedBets.length === 0 ? (<></>) : (<div>{
                        closedBetQuery.data.closedBets.splice(0).reverse().map((bet, index) => (
                          <BetAccordion
                            key={index}
                            eventKey={index}
                            teamA={bet.teamA}
                            teamB={bet.teamB}
                            choiceName={bet.choiceName}
                            amount={bet.amount}
                          />
                        ))
                      }</div>
                      )}
                    </Accordion>
                  </Container>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}




