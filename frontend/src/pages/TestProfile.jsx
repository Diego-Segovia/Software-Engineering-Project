import { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { AuthContext } from "../utils/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from "react-router-dom";
import FeeTableComponent from "../components/FeeTableComponent";



const TestProfile = () => {
  const auth = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
 
 

  const [fields, setFields] = useState({
    firstName: auth.userData.firstname,
    lastName: auth.userData.lastname,
    username: auth.userData.authusername,
    password: auth.userData.authpassword,
    image: auth.userData.userimage,
    membership: "Active",
    newPassword: "",
  });

  useEffect(() => {
    setFields({
      firstName: auth.userData.firstname,
      lastName: auth.userData.lastname,
      username: auth.userData.authusername,
      password: auth.userData.authpassword,
      image: auth.userData.userimage,
      membership: "Active",
      newPassword: "",
    });
  }, [auth.userData]);
  
  const toggleEditMode = () => setEditMode(!editMode);
 // const togglePasswordEditMode = () => setPasswordEditMode(!passwordEditMode);

 





 const column = [
  {heading: 'Id', value:'fineID'},
  {heading: 'Bookname', value:'bookname'},
  {heading: 'Fine Desc', value:'finedesc'},
  {heading: 'Due Date', value:'dueDate'},
  {heading: 'Amount', value:'fineamt'},
  {heading: "Status", button: {label: "Pay Now", onClick: () => alert("Payment processing...")  }  },
  
 ];



  
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };


  const data = [
    {
      fineID: 1,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 2,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 12,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 3,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 4,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 5,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 6,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 7,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
    {
      fineID: 8,
      bookname: "Test Title",
      checkInDate: "05/02/99",
      dueDate: "05/02/99",
      fineamt: 22,
      status: 1,
      finedesc: "Loaned out book was returned damaged"
    },
  ];
  

  


  return (
    <Container fluid   style={{ backgroundColor:"white" }}>
      <Row  className=" bg-light rounded-3" style={{ border: '30px solid white' , position: 'relative', borderRadius:"30px" }}>

<Col className="d-flex align-items-center justify-content-left col-3 bg-light m-auto mt-4" 
style={{ position: 'relative' }}>

  <div className="card m-auto bg-dark ">
  
 
  
    
    
    <Card  className=" bg-dark outline-light p-4" style={{  }}>
      
      <Card.Img variant="primary" 
      className=" d-flex justify-content-center m-auto rounded-circle bg-light "
      src={fields.image} style={{ width: '100%', height: '400px' }} />
      <Card.Body className=" bg-dark"   >
      <h1 className=" text-center w-100 text-light" style={{  }}> {fields.firstName}  {fields.lastName}</h1>
        <Button variant="light" className=" d-flex justify-content-center m-auto">Change Image</Button>
      </Card.Body>
    </Card>
  
  </div>

  
</Col>

<Col className="d-flex   col-8  justify-content-center m-auto mt-4 me-5 rounded-4 "
style={{    position: 'relative', backgroundColor: "#E8DFDA" , background:"#E8DFDA"}}> 

<div 
 style={{backgroundColor: "#E8DFDA" }}
 className="card   w-100 border-0 "  >



      


<div className="  nav-tabs border-dark ">



<h1 className="text-dark mb-2">Patron Profile</h1>
<Tabs defaultActiveKey={"first"} className=" border-dark  border-1 "> 
  <Tab eventKey={"first"} title="Info" className="border-info" > 
    <div className="Container border-info ">
        
    <div className="input-group mb-2" style={{  }}>
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start  " style={{  borderRadius: '30px' }}>First Name</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{fields.firstName} </h3>
    
            </div>
             
              <div className="input-group mb-2 " style={{}}>
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Last Name</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}> {fields.lastName}</h3>
         
            </div>
             
              <div className="input-group  mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Email</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{fields.username} </h3>
          
            </div>
              
              <div className="input-group mb-2 ">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>User Role</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{auth.userData.userrole}</h3>
          
            </div>
             
              <div className="input-group mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Membership Status</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{fields.membership}</h3>
         
            </div>

             

            

    
</div>

  </Tab>
  <Tab eventKey={"second"} title="Change Infomation">

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

  </Tab>
  <Tab eventKey={"third"} title="Change Password">
  <Form className=" card bg-dark w-50 m-auto mt-5 mb-5">
  <Form.Group className=" m-4">
                  <Form.Label className="text-light h2">Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="currentPassword"
                    value={fields.password}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
              
                <Form.Group className=" m-4">
                  <Form.Label className="text-light h2">New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={fields.newPassword}
                    onChange={handleChange}
                    readOnly={!editMode}
                  />
                </Form.Group>
              
              
                <div className="d-flex justify-content-center mt-3 mb-3">
                  {editMode? (
                    <Button
                      variant="success"
                      onClick={() => {
                        toggleEditMode
                      }}
                      style={{ marginRight: "30px" }}
                    >
                      Save Changes
                    </Button>
                  ) : (
                    <Button  className="btn btn-default bg-dark text-light ms-4 mb-3"
                      variant="primary"
                      onClick={toggleEditMode}
                      style={{ marginRight: "30px" }}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              </Form>
   

  </Tab>
</Tabs>

</div>

</div>
   

</Col>
</Row>


<Row> <FeeTableComponent data={data} column={column}> </FeeTableComponent></Row>
</Container>


  );
};

export default TestProfile;
