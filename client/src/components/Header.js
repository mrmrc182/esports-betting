import { useAuth } from "../util/auth";
import { Navbar, Container } from "react-bootstrap";
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedPageExample from "../pages/ProtectedPageExample";
import SignUp from "../pages/SignUp";

export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Open Lobby</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Routes>
                            {/* <Route path="/" element={<Home />} /> */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
                            <Route
                                path="/protected"
                                element={
                                    <RequireAuth>
                                        <Navigation />
                                    </RequireAuth>
                                }
                            />
                        </Routes>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
