import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/3627/3627782.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          LibraSphere
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto mx-1">
          <Nav.Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/searchCatalog"
              style={{ color: "white", textDecoration: "none" }}
            >
              Catalog
            </Link>
          </Nav.Link>
          <Nav.Link>
            <LoginModal />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
