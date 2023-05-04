import { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { AuthContext } from "../utils/auth-context";
import FineCard from '../components/Fine';

const PatronProfile = () => {
  const auth = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [fineAmount, setFineAmount] = useState(0);


  const [fields, setFields] = useState({
    userid: auth.userData.userid,
    firstName: auth.userData.firstname,
    lastName: auth.userData.lastname,
    username: auth.userData.authusername,
    password: auth.userData.authpassword,
    image: auth.userData.userimage,
    membership: "Active",
  });

  const enterEditMode = () => {
    setEditMode(true);
  };
  
  const cancelEditMode = () => {
    setEditMode(false);
    setFields({
      userid: auth.userData.userid,
      firstName: auth.userData.firstname,
      lastName: auth.userData.lastname,
      username: auth.userData.authusername,
      password: auth.userData.authpassword,
      image: auth.userData.userimage,
      membership: "Active",
    });
  };

  useEffect(() => {
    setFields({
      userid: auth.userData.userid,
      firstName: auth.userData.firstname,
      lastName: auth.userData.lastname,
      username: auth.userData.authusername,
      password: auth.userData.authpassword,
      image: auth.userData.userimage,
      membership: "Active",
    });
    fetchUserFines();
  }, [auth.userData]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const lowercaseFields = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => {
      let newKey = key.toLowerCase();
      if (newKey === 'username') newKey = 'authusername';
      if (newKey === 'password') newKey = 'authpassword';
      return [newKey, value];
    })
  );

  const handleSaveChanges = async () => {
  try {
    const response = await fetch("http://localhost:3005/api/users/updateUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lowercaseFields),
    });

    // Handle response and update the auth context if needed
    if (response.ok) {
      const updatedUserData = await response.json();
      auth.setUser(updatedUserData);
      setEditMode(false);
    } else {
      // Handle error
      console.error("Error updating user");
    }
  } catch (error) {
    // Handle error
    console.error(`Error updating user: ${error.message}`);
  }
};

const fetchUserFines = async () => {
  console.log("fetchUserFines called");
  try {
    const patronId = auth.userData.userid;
    const response = await fetch(`http://localhost:3005/api/loans/${patronId}/fines`, {
      method: "GET",
    });

    if (response.ok) {
      const loans = await response.json();
      console.log("Fetched loans:", loans);
      const totalFineAmount = loans.reduce((total, loan) => {
        return loan.fine ? total + loan.fine.fineamt : total;
      }, 0);
      setFineAmount(totalFineAmount);
      console.log("Total fine amount:", totalFineAmount);
    } else {
      console.error("Error retrieving user fines");
    }
  } catch (error) {
    console.error(`Error retrieving user fines: ${error.message}`);
  }
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
                  {fields.firstName} {fields.lastName}
                </h3>
                <div className="d-flex justify-content-center">
                  <img
                    src={fields.image}
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
                    value={fields.firstName}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={fields.lastName}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={fields.username}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={fields.password}
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
                    <>
                      <Button
                        variant="success"
                        onClick={() => {
                          handleSaveChanges();
                          setEditMode(false);
                        }}
                        style={{ marginRight: "30px" }}
                      >
                        Save Changes
                      </Button>
                      <Button variant="danger" onClick={cancelEditMode}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={enterEditMode}
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
        <div style={{ marginLeft: '2rem' }}>
          <FineCard initialFineAmount={fineAmount} />
      </div>
      </div>
    </Container>
  );
};

export default PatronProfile;
