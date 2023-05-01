import { useState, useContext, useRef } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../utils/auth-context";
import { loginUser } from "../utils/utils";

const LoginModal = () => {
  const auth = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const staffIdRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLibrarianLogin = () => auth.setAsLibrarian(true);
  const handlePatronLogin = () => auth.setAsLibrarian(false);

  const onPatronLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const responseData = await loginUser(data);

      if (responseData.userrole == "Librarian") {
        alert("only for patron login");
        throw new Error("Login failed");
      }

      auth.setUser(responseData);
      auth.setAsLibrarian(false);
      auth.login();

      handleClose();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const onLibrarianLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const responseData = await loginUser(data);

      if (responseData.userrole == "Library_Patron") {
        alert("only for librarian login");
        throw new Error("Login failed");
      }

      auth.setUser(responseData);
      auth.setAsLibrarian(true);
      auth.login();

      handleClose();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Link
        className="me-1"
        style={{ color: "white", textDecoration: "none" }}
        onClick={handleShow}
      >
        <FontAwesomeIcon className="mx-auto" icon={faSignIn} /> Login
      </Link>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {auth.isLibrarian ? (
            <Modal.Title>Librarian Login</Modal.Title>
          ) : (
            <Modal.Title> Patron Login</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            {auth.isLibrarian && (
              <Form.Group controlId="staffId" className="mb-1">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  ref={staffIdRef}
                  type="text"
                  placeholder="Enter staff id"
                />
              </Form.Group>
            )}
            <Form.Group controlId="username" className="mb-1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={usernameRef}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {!auth.isLibrarian && (
              <Form.Group controlId="signup">
                <Form.Text className="text-muted">
                  Don't have an account?{" "}
                  <Link
                    to="/patron-signup"
                    onClick={handleClose}
                    style={{ textDecoration: "none" }}
                  >
                    Sign up
                  </Link>
                </Form.Text>
                <br />
                <Form.Text className="text-muted">
                  Login as librarian?{" "}
                  <Link
                    onClick={handleLibrarianLogin}
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Form.Text>
              </Form.Group>
            )}
            {auth.isLibrarian && (
              <Form.Group controlId="signup">
                <Form.Text className="text-muted">
                  Don't have an account?{" "}
                  <Link
                    to="/staff-signup"
                    onClick={handleClose}
                    style={{ textDecoration: "none" }}
                  >
                    Sign up
                  </Link>
                </Form.Text>
                <br />
                <Form.Text className="text-muted">
                  Login as patron?{" "}
                  <Link
                    onClick={handlePatronLogin}
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Form.Text>
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Col className="d-flex justify-content-end">
            {!auth.isLibrarian && (
              <Button variant="primary" type="submit" onClick={onPatronLogin}>
                Login
              </Button>
            )}
            {auth.isLibrarian && (
              <Button
                variant="primary"
                type="submit"
                onClick={onLibrarianLogin}
              >
                Login
              </Button>
            )}
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
