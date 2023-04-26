import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="signup">
              <Form.Text className="text-muted">
                Don't have an account?{" "}
                <a href="#signup" onClick={handleClose}>
                  Sign up
                </a>
              </Form.Text>
            </Form.Group>
			
			<Link to={"/librarianDashboard"} style={{fontSize: ".8rem"}}>
				Librarian Dashboard
			</Link>
			
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
