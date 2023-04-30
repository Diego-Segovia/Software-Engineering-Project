import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const SettingsPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <Card style={{ width: "30rem", backgroundColor: "#f8f9fa" , minHeight : "35vh"}}>
        <Card.Header className="text-center">
          <h2>Settings</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Language</Form.Label>
              <Form.Control as="select">
                <option>English</option>
                <option>Spanish</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Appearance</Form.Label>
              <Form.Control as="select">
                <option>Light Mode</option>
                <option>Dark Mode</option>
              </Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
              <Button variant="primary" type="submit" style={{ backgroundColor : "#36454F", borderColor : "36454F"}}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="danger" onClick={() => console.log("Logout clicked")}>
            Log Out
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SettingsPage;
