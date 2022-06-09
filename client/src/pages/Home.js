import { useAuth } from "../util/auth";
import {Card} from "react-bootstrap";
import "../styles/Home.css";


export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome {isLoggedIn ? user.username : "Guest"} to Open Lobby!</h1>
      <hr />
      <br></br>
      <Card className="homepage-cards">
        <Card.Body className="background"><h3>Play for FREE!</h3></Card.Body>
      </Card>
      <br></br>
      <Card className="homepage-cards-right">
        <Card.Body className="background"><h3>Earn Credits Weekly</h3></Card.Body>
      </Card>
      <br></br>
      <Card className="homepage-cards">
        <Card.Body className="background"><h3>Place bets on CS:GO, LoL, Overwatch, Dota 2, and many more!</h3></Card.Body>
      </Card>
      <br></br><br></br>
    </div>
  );
}
