import { useAuth } from "../util/auth";
import {Card} from "react-bootstrap";


export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <br></br>
      <Card style={{textAlign: "left", border: "5px solid black", backgroundColor: "lightgray"}}>
        <Card.Body><h3>Play for FREE!</h3></Card.Body>
      </Card>
      <br></br>
      <Card style={{textAlign: "right", border: "5px solid black", backgroundColor: "lightgray"}}>
        <Card.Body><h3>Earn Credits Weekly</h3></Card.Body>
      </Card>
      <br></br>
      <Card style={{textAlign: "left", border: "5px solid black", backgroundColor: "lightgray"}}>
        <Card.Body><h3>Place bets on CS:GO, LoL, Overwatch, Dota 2, and many more!</h3></Card.Body>
      </Card>
      <br></br><br></br>
    </div>
  );
}
