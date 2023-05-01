import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';






const data = [
    {
      id: 1,
      firstname: "John",
      lastname: "Neil deGrasse Tyson",
      userimage:
        "https://m.media-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg",
        authUsername: "kenny@gmail.com",
    },
    {
      id: 2,
      firstname: "Ethan",
      lastname: "Stephen Hawking",
      userimage:
        "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
        authUsername: "wilson@gmail.com",
    },
    {
      id: 3,
      firstname: "Cosmos",
      lastname: "Carl Sagan",
      userimage:
        "https://m.media-amazon.com/images/I/51IcVjsJlDL._SX322_BO1,204,203,200_.jpg",
        authUsername: "cookie@gmail.com",
    },
    
  ];

function LibrarianProfilePage(){

  const params = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    fetchUserById(setUser, params.authUsername);
}, []);

    return(
        
        <>
   
      <Container fluid   style={{ backgroundColor:"white" }}>
      <Row  className=" bg-light rounded-3" style={{ border: '30px solid white' , position: 'relative', borderRadius:"30px" }}>

<Col className="d-flex align-items-center justify-content-left col-3 bg-light m-auto mt-4" 
style={{ position: 'relative' }}>

  <div className="card m-auto bg-dark ">
  
 
  
    
    
    <Card  className=" bg-dark outline-light p-4" style={{  }}>
      
      <Card.Img variant="primary" 
      className=" d-flex justify-content-center m-auto rounded-circle bg-light "
      src={user.userimage} style={{ width: '100%', height: '400px' }} />
      <Card.Body className=" bg-dark"   >
      <h1 className=" text-center w-100 text-light" style={{  }}> {user.firstname}  {user.lastname}</h1>
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



      


<div className="  nav-tabs border-info ">



<h4 className="text-light mb-2">Profile</h4>
<Tabs defaultActiveKey={"first"} className=" border-dark  border-1 "> 
  <Tab eventKey={"first"} title="Info" className="border-info" > 
    <div className="Container border-info ">
        
    <div className="input-group mb-2" style={{  }}>
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start  " style={{  borderRadius: '30px' }}>First Name</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{data[2].firstname} </h3>
    
            </div>
             
              <div className="input-group mb-2 " style={{}}>
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Last Name</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>West</h3>
         
            </div>
             
              <div className="input-group  mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Email</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>{data[2].authUsername} </h3>
          
            </div>
              
              <div className="input-group mb-2 ">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Address</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Saints Andrews Dr 3214</h3>
          
            </div>
             
              <div className="input-group mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>City</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Orlando</h3>
         
            </div>

              <div className="input-group mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Zipcode</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>06224</h3>
             
            </div>

              <Button variant="light" className="  w-50 d-flex justify-content-center m-auto mb-4 mt-4 "
              style={{   }}>Save</Button>


    
</div>

  </Tab>
  <Tab eventKey={"second"} title="Change Infomation">
    
        
  <div className="input-group mb-2" style={{ border: '5px solid #E8DFDA' }}>
    <h2 className=" text-center w-100 text-dark  d-flex justify-content-start  " style={{  borderRadius: '30px' }}>First Name</h2>
   <input type="text" className="form-control w-80 rounded-3" placeholder="Recipient's Firstname" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark rounded text-light ms-2" style={{ }} type="button" id="button-addon2">Edit</button>
  </div>
   
    <div className="input-group mb-2 " style={{ border: '5px solid #E8DFDA' }}>
    <h2 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Last Name</h2>
   <input type="text" className="form-control w-80 rounded-3" placeholder="Recipient's Lastname" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark ms-2 rounded" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
  </div>
   
    <div className="input-group  mb-2">
    <h2 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Email</h2>
   <input type="email" className="form-control rounded-3" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark ms-2 rounded" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
  </div>
    
    <div className="input-group mb-2 ">
    <h2 className=" text-center w-100 text-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Address</h2>
   <input type="text" className="form-control rounded-3" placeholder="Recipient's Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark ms-2 rounded" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
  </div>

  <div className="input-group mb-2">
    <h2 className=" text-center w-100 text-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>City</h2>
   <input type="text" className="form-control rounded-3" placeholder="Recipient's City" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark ms-2 rounded" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
  </div>

    <div className="input-group mb-2">
    <h2 className=" text-center w-100 text-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Zipcode</h2>
   <input type="number" className="form-control rounded-3" placeholder="Recipient's Zipcode" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary bg-dark ms-2 rounded" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
  </div>
   
   

    <Button variant="dark" className="  w-50 d-flex justify-content-center m-auto mb-4 mt-4 "
    style={{   }}>Save</Button>

  </Tab>
  <Tab eventKey={"third"} title="Change Password">
    <div className="card bg-secondary w-50 m-auto mt-5 mb-5">
    <form action="/action_page.php">
<div class="form-group m-4">
<label for="pwd"><h2>Current Password:</h2></label>
<input type="password" className="form-control" id="email"/>
</div>
<div class="form-group m-4">
<label for="pwd"><h2>New Password:</h2></label>
<input type="password" className="form-control" id="pwd"/>
</div>

<button type="submit" className="btn btn-default bg-dark text-light ms-4 mb-3">Submit</button>
</form>


    </div>

  </Tab>
</Tabs>

</div>

</div>
   

</Col>
</Row>

        
          
      
    
      
         
       
        <Row className=" w-75 m-auto " style={{ border: '25px solid white' , position: 'relative'}}>
       

        </Row>
       <Row  className=" bg-light">

        <Col className=" bg-dark m-4 rounded"  style={{ height: '300px'}}>
        <div className="card w-50   my-5   m-auto    "  style={{ height: '200px'}}>
  <Link
              to="/userPatronProfile"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        User Profile
      </h1></button>
              

      </div>
      </Link>
  </div>
        </Col>
      

  <Col Col className=" bg-dark m-4 rounded" >
  <div className="card w-50   my-5   m-auto    "  style={{ height: '200px'}}>
  <Link
              to="/PaymentPage"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-primary bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        Payment Page
      </h1></button>
              

      </div>
      </Link>
  </div>
</Col>

  
       </Row>

       <Row  className="">
    
      
<Col>
<div className="card w-75 bg-dark m-auto   " >

</div>
</Col>
       </Row>

       <Row  className=" bg-light ">

        <Col className=" bg-dark m-4 rounded"  style={{ height: '300px'}}>
        <div className="card w-50   my-5   m-auto    "  style={{ height: '200px'}}>
  <Link
              to="/userPatronProfile"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-primary bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        Management Page
      </h1></button>
              

      </div>
      </Link>
  </div>
        </Col>
      

  <Col Col className=" bg-dark m-4 rounded" >
  <div className="card w-50   my-5   m-auto    "  style={{ height: '200px'}}>
  <Link
              to="/userPatronProfile"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-primary bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        Management Page
      </h1></button>
              

      </div>
      </Link>
  </div>
</Col>

  
       </Row>
       <Row>
     
       </Row>
      </Container>
   
     
    </>
    );
}

export default LibrarianProfilePage