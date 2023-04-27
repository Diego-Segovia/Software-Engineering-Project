import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSignup = () => setIsSignup(!isSignup);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const username = formData.get("username");
    const password = formData.get("password");

    if (isSignup) {
      //api stuff here
      
    } else {
      
     
    }

    handleClose();
  };

  return (
    <>
      <Link
        className="me-1"
        style={{ color: "white", textDecoration: "none" }}
        onClick={handleShow}
      >
        Login
      </Link>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isSignup ? "Sign Up" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                  />
                </Form.Group>
              </>
            )}
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="toggleSignup">
              <Form.Text className="text-muted">
                {isSignup
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <a href="#toggleSignup" onClick={toggleSignup}>
                  {isSignup ? "Login" : "Sign up"}
                </a>
              </Form.Text>
            </Form.Group>
            <Modal.Footer>
              <Col className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  {isSignup ? "Sign Up" : "Login"}
                </Button>
              </Col>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>);
};
        export default LoginModal;