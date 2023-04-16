import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoginModal from "./LoginModal";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Library Management System
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <LoginModal />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
