import { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { AuthContext } from "../utils/auth-context";

const PatronProfile = () => {
  const auth = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  const [fields, setFields] = useState({
    firstName: "Bill",
    lastName: "Clinton",
    username: "bill_clinton",
    password: "********",
    membership: "Active",
  });

  const defaultFields = {
    firstName: "Bill",
    lastName: "Clinton",
    username: "bill_clinton",
    password: "********",
    membership: "Active",
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) setFields(defaultFields);
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Patron Profile</h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <Card style={{ backgroundColor: "#f0f0f0", width: "70%" }}>
          <Row noGutters>
            <Col md={5} className="p-3">
              <div className="d-flex flex-column h-100 justify-content-center">
                <h3 className="text-center font-weight-bold">
                  {auth.userData.firstname} {auth.userData.lastname}
                </h3>
                <div className="d-flex justify-content-center">
                  <img
                    src={auth.userData.userimage}
                    alt="User"
                    style={{
                      width: "90%",
                      height: "100%",
                      border: "2px solid #ccc",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col md={1}>
              <div
                style={{
                  borderLeft: "2px solid #d0d0d0",
                  height: "100%",
                  marginLeft: "-1px",
                }}
              ></div>
            </Col>
            <Col md={6} className="p-3">
              <Form className="me-5">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={auth.userData.firstname}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={auth.userData.lastname}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={auth.userData.authusername}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={auth.userData.authpassword}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Membership Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="membership"
                    value={fields.membership}
                    readOnly
                  />
                </Form.Group>
                <div className="d-flex justify-content-center mt-3">
                  {editMode ? (
                    <Button
                      variant="success"
                      onClick={toggleEditMode}
                      style={{ marginRight: "30px" }}
                    >
                      Save Changes
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={toggleEditMode}
                      style={{ marginRight: "30px" }}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default PatronProfile;