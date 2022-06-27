import { useAuth } from "../util/auth";
import { Card } from "react-bootstrap";
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
            No need to purchase currency! Login daily for 100 free credits.
          </Card.Text>
          <Card.Text>
            Get bonus credits for logging in 7 consectutive days in a row.
          </Card.Text>
          <Card.Text>
            Place your bets and climb the leaderboard to greatness!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img src={process.env.PUBLIC_URL + 'assets/images/valorant.png'} alt="Card image" />
        <Card.ImgOverlay className="home-card">
          <Card.Title>
            <h1>Earn Credits Daily</h1>
          </Card.Title>
          <Card.Text>
            You will get 1000 free credits when you signup, then 100 free cedits everyday you login!
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
