import { useAuth } from "../util/auth";
import { Container, Card, Image } from "react-bootstrap";
import "../styles/Home.css";


export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="card-cont">

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/lol-banner.png'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>Play for FREE!</Card.Title>
          <Card.Text>
            No need to purchase currency!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/valorant.png'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>Earn Credits Weekly</Card.Title>
          <Card.Text>
            You can make your bets and get a re-up of 1000 credits every week!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/csgo.jpeg'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div >
  );
}
