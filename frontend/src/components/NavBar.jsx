import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faGear,
  faUser,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const auth = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container w-25">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3627/3627782.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            LibraSphere
          </Link>
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto mx-1">
          <Nav.Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="mx-auto" icon={faHome} /> Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/books"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="mx-auto" icon={faBookOpen} /> Catalog
            </Link>
          </Nav.Link>
          {!auth.isLoggedIn && (
            <Nav.Link>
              <LoginModal />
            </Nav.Link>
          )}
          {auth.isLoggedIn && auth.isLibrarian && (
            <Nav.Link>
              <Link
                to="/librarianDashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FontAwesomeIcon className="mx-auto" icon={faTablet} />{" "}
                Dashboard
              </Link>
            </Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link>
              <Link
                to="/patron-profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FontAwesomeIcon className="mx-auto" icon={faUser} /> Profile
              </Link>
            </Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link>
              <Link
                to="/settings"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FontAwesomeIcon className="mx-auto" icon={faGear} /> Settings
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
