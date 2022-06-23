import { Accordion } from "react-bootstrap";
import "../styles/Profile.css";

export default function BetAccordion(props) {

  return (
    <Accordion.Item eventKey={props.eventKey} className="prof-cards">
      <Accordion.Header>{props.teamA} vs {props.teamB}</Accordion.Header>
      <Accordion.Body>Picked to Win: {props.choiceName} | Bet Amount: {props.amount}</Accordion.Body>
      {/* <Accordion.Body>Bet Amount: {props.amount}</Accordion.Body> */}
    </Accordion.Item>
  );
}
