import { useAuth } from "../util/auth";
import { Navbar, Container, Button } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/Header.css'


export default function Header() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header>
            <Navbar collapseOnSelect id="head-nav" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" id="header-font">Open Lobby</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="links">
                            <Nav.Link as={Link} to="/" className="padding-right-hamburger">Home</Nav.Link>
                            {isLoggedIn && <Nav.Link as={Link} to="/profile" className="padding-right-hamburger">Profile</Nav.Link>}
                            <Nav.Link as={Link} to="/matches" className="padding-right-hamburger">Matches</Nav.Link>
                            {isLoggedIn && <Nav.Link as={Link} to="/leaderboard" className="padding-right-hamburger">Leaderboard</Nav.Link>}
                            {isLoggedIn || <Nav.Link as={Link} to="/login" className="padding-right-hamburger">Login</Nav.Link>}
                            {isLoggedIn || <Nav.Link as={Link} to="/signup" className="padding-right-hamburger">Signup</Nav.Link>}
                            {isLoggedIn && <Nav.Link as={Button} onClick={logout}>Logout</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
