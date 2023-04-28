import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookSection from "../components/UI/BookSection";
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';






const bookData = [
    {
      id: 1,
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      coverImg:
        "https://m.media-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      coverImg:
        "https://m.media-amazon.com/images/I/51+GySc8ExL._SX333_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "Cosmos",
      author: "Carl Sagan",
      coverImg:
        "https://m.media-amazon.com/images/I/51IcVjsJlDL._SX322_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      coverImg:
        "https://m.media-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      title: "A Heartbreaking Work of Staggering Genius",
      author: "Dave Eggers",
      coverImg:
        "https://m.media-amazon.com/images/I/51em6Mq-+gL._SX320_BO1,204,203,200_.jpg",
    },
    {
      id: 6,
      title: "A Wrinkle in Time",
      author: "Madeleine L'Engle",
      coverImg:
        "https://m.media-amazon.com/images/I/41NvfPTY4hL._SX400_BO1,204,203,200_.jpg",
    },
    {
      id: 7,
      title: "A Long Way Gone: Memoirs of a Boy Soldier",
      author: "Ishmael Beah",
      coverImg:
        "https://m.media-amazon.com/images/I/41F3OLVtknL._SX330_BO1,204,203,200_.jpg",
    },
    {
      id: 8,
      title: "In Cold Blood",
      author: "Truman Capote",
      coverImg:
        "https://m.media-amazon.com/images/I/41GpHh-5KFL._SX322_BO1,204,203,200_.jpg",
    },
    {
      id: 9,
      title: "Guns, Germs, and Steel: The Fates of Human Societies",
      author: "Jared Diamond Ph.D.",
      coverImg:
        "https://m.media-amazon.com/images/I/51lVEXYsw0L._SX327_BO1,204,203,200_.jpg",
    },
    {
      id: 10,
      title:
        "The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America",
      author: "Erik Larson",
      coverImg:
        "https://m.media-amazon.com/images/I/41i6RKW1IXL._SX314_BO1,204,203,200_.jpg",
    },
  ];

function LibrarianProfilePage(){
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
      src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" style={{ width: '100%', height: '400px' }} />
      <Card.Body className=" bg-dark"   >
      <h1 className=" text-center w-100 text-light" style={{  }}>Adam Smith</h1>
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
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Adam</h3>
    
            </div>
             
              <div className="input-group mb-2 " style={{}}>
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Last Name</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>West</h3>
         
            </div>
             
              <div className="input-group  mb-2">
              <h5 className=" text-center w-100 text-secondary  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Email</h5>
              <h3 className=" text-center w-100 text-dark  d-flex justify-content-start " style={{  borderRadius: '30px' }}>Adamwest@gmail.com</h3>
          
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
      </Container>
   
     
    </>
    );
}

export default LibrarianProfilePage