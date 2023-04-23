import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function SignupModal() {
    const [showSignUpModel, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  
    const validateEmail = (email) => {
      // Add your email validation logic here
      return /\S+@\S+.\S+/.test(email);
    };
  
    const validatePassword = (password) => {
  
      return password.length >= 6;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password);
  
      setEmailError(isEmailValid ? '' : 'Invalid email address');
      setPasswordError(isPasswordValid ? '' : 'Password must be at least 6 characters long');
  
      if (isEmailValid && isPasswordValid) {
        // Submit the form
        console.log('Form submitted:', { email, password });
        handleClose();
      }
    };
  
    return (
      <div>
        <Link
          className="me-1"
          style={{ color: "white", textDecoration: "none" , whiteSpace: "nowrap"}}
          onClick={handleShow}
        >
        Sign Up
        </Link>
        <Modal show={showSignUpModel} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!emailError}
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!passwordError}
                />
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Col className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleClose}>
            Sign Up
            </Button>
          </Col>
        </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default SignupModal;
  