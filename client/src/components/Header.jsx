import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { useUserContext } from "../utils/Context";
export default function Header() {
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
  const { status, setStatus } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedIn(status);
  }, [status]);

  const handleLogout = (e) => {
    Auth.logout(navigate, setStatus);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <h1>loggedIn status: {JSON.stringify(loggedIn)}</h1>
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {loggedIn ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
