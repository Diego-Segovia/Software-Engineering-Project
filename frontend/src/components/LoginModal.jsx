import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [isLibrarian, setisLibrarian] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setisLibrarian(false);
    setShow(true);
  };

  const handleLibrarianLogin = () => setisLibrarian(true);
  const handlePatronLogin = () => setisLibrarian(false);

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
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {isLibrarian && (
              <Form.Group controlId="staffId" className="mb-1">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control type="text" placeholder="Enter staff id" />
              </Form.Group>
            )}
            <Form.Group controlId="username" className="mb-1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password" className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {!isLibrarian && (
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
                    to="/patron-signup"
                    onClick={handleLibrarianLogin}
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Form.Text>
              </Form.Group>
            )}
            {isLibrarian && (
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
                <br />
                <Form.Text>
                  <Link style={{ textDecoration: "none" }}>
                    Librarian Dashboard
                  </Link>
                </Form.Text>
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Col className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
