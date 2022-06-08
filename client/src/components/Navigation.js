import { useAuth } from "../util/auth";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Nav className="ms-auto" id="links">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/project">Profile</Nav.Link>
      <Nav.Link as={Link} to="/contact">Matches</Nav.Link>
      <Nav.Link as={Link} to="/resume">Leaderboard</Nav.Link>
    </Nav>
  );
}
