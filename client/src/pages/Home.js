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
          <Card.Title>
            <h1>Play for FREE!</h1>
          </Card.Title>
          <Card.Text>
            No need to purchase currency!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/valorant.png'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>
            <h1>Earn Credits Weekly</h1>
          </Card.Title>
          <Card.Text>
            You can make your bets and get a re-up of 1000 credits every week!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/csgo.jpeg'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>
            <h1>More e-sports coming soon!</h1>
          </Card.Title>
          <Card.Text>
            Expect more exciting e-sports to be added such as LoL, Overwatch, Valorant and more!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div >
  );
}
