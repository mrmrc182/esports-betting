import { useAuth } from "../util/auth";
import { Navbar, Container, Button } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RequireAuth from "./RequireAuth";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import ProtectedPageExample from "../pages/ProtectedPageExample";
// import SignUp from "../pages/SignUp";

export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Open Lobby</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="links">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {isLoggedIn && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
                            <Nav.Link as={Link} to="/contact">Matches</Nav.Link>
                            {isLoggedIn && <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>}
                            {isLoggedIn || <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            {isLoggedIn || <Nav.Link as={Link} to="/signup">Signup</Nav.Link>}
                            {isLoggedIn && <Nav.Link as={Button} onClick={logout}>Logout</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
