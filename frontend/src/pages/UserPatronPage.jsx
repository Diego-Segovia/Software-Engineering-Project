import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookSection from "../components/UI/BookSection";
import { Link } from "react-router-dom";





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

function UserPatronPage(){
    return(
        
        <>
     
     
      <Container fluid   style={{ backgroundColor:"white" }}>
        <Row  className=" bg-dark rounded-3" style={{ border: '30px solid white' , position: 'relative', borderRadius:"30px" }}>
          <Col className="d-flex align-items-center justify-content-left col-3 bg-dark" 
          style={{ position: 'relative' }}>
            <div  className="  m-auto bg-dark"
            style={{    }}>
              <h1 className=" text-center w-100 text-light" style={{  }}>Kennedi Serrano</h1>
              
              <Card  className=" bg-dark" style={{ width: '18rem' , marginTop:'50px'}}>
                <Card.Img variant="primary" 
                className=" d-flex justify-content-center m-auto rounded-3  "
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" style={{ width: '100%', height: '400px' }} />
                <Card.Body className=" bg-dark"   >
                  <Button variant="light" className=" d-flex justify-content-center m-auto">Change Image</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
         
          <Col className="d-flex   col-8  justify-content-center m-auto mt-4 me-5 rounded-4"
          style={{    position: 'relative'}}> 
          <div 
           style={{ }}
           className="   w-100">
             
            
              <div className="input-group mb-2" style={{ border: '5px solid ' }}>
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start  " style={{  borderRadius: '30px' }}>First Name</h2>
             <input type="text" className="form-control w-80 rounded-3" placeholder="Recipient's Firstname" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary bg-light" style={{ }} type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group mb-2 " style={{ border: '5px solid' }}>
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Last Name</h2>
             <input type="text" className="form-control w-80 rounded-3" placeholder="Recipient's Lastname" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group  mb-2">
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Email</h2>
             <input type="email" className="form-control rounded-3" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
            </div>
              
              <div className="input-group mb-2 ">
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Address</h2>
             <input type="text" className="form-control rounded-3" placeholder="Recipient's Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group mb-2">
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>City</h2>
             <input type="text" className="form-control rounded-3" placeholder="Recipient's City" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
            </div>

              <div className="input-group mb-2">
              <h2 className=" text-center w-100 text-light bg-dark d-flex justify-content-start " style={{  borderRadius: '30px' }}>Zipcode</h2>
             <input type="number" className="form-control rounded-3" placeholder="Recipient's Zipcode" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" style={{ color:'white'}} type="button" id="button-addon2">Edit</button>
            </div>

              <Button variant="light" className="  w-50 d-flex justify-content-center m-auto mb-4 mt-4 "
              style={{   }}>Save</Button>

             
              
            </div>
          </Col>
        </Row>
        
          
      
    
      
         
       
        <Row className=" w-75 m-auto " style={{ border: '25px solid white' , position: 'relative'}}>
        <Col Col className="  m-4 rounded" >
  <div className="card w-50   my-5   m-auto    "  style={{ height: '200px', background:"#E8DFDA"}}>
  <Link
              to="/userPatronProfile"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-primary bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        Acount Management
      </h1></button>
              

      </div>
      </Link>
  </div>
</Col>

<Col Col className="  m-4 rounded" style={{  background:"#E8DFDA"}} >
  <div className="card w-50   my-5   m-auto    "  style={{ height: '200px', background:"#E8DFDA"}}>
  <Link
              to="/userPatronProfile"
              style={{ textDecoration:"none" }}
            >
    <div className="col  text-dark bg-primary bg-secondary d-flex justify-content-center m-auto align-items-center w-100 rounded" style={{ height: '200px'}}>
   
   
               <button className="btn btn-outline-light w-100 h-100" style={{ color:'white'}} type="button" id="button-addon2">  <h1 className=" ">
        Fee management
      </h1></button>
              

      </div>
      </Link>
  </div>
</Col>


        </Row>
       <Row  className="">

       </Row>

       <Row  className="">
        <Col>
       <div className="card w-75  m-auto mb-5 bg-secondary   " >
       <div className="container  ">
  <div className="row">
    <div className="col mb-4 text-dark">
      <h1>
        Late Fees
      </h1>
      </div>
  </div>
  <div className="row bg-secondary rounded-3 text-light m-auto">
    <div className="col-2 ">
      <h4>
      Book Name
        </h4></div>
    <div className="col-2">
    <h4>
      Check in Date
        </h4>
      </div>
    <div className="col-2">
    <h4>
      Check out Date
        </h4>
    </div>
    <div className="col-2">
    <h4>
      Due Date
        </h4>
    </div>
    <div className="col-2">
    <h4>
      Amount
        </h4>
    </div>
    <div className="col-2 ">
    <h4>
      Status
        </h4>
    </div>
  </div>

  <div className="row bg-light rounded-3  mt-1">
    <div className="col-2 ">
      </div>
    <div className="col-2">
    
      </div>
    <div className="col-2">
    
    </div>
    <div className="col-2">
    
    </div>
    <div className="col-2">
    
    </div>
    <div className="col-2">
    <h5>
    
        </h5>
    </div>
  </div>

  <div className="row .overflow-auto overflow-y: scroll   " style={{ maxHeight:"300px" , overflowY:"scroll" }} >
 
  <div className="col-2 mt-2 .overflow-auto  ">
  <ul className="list-group list-group-flush rounded-3  ">
    <li className="list-group-item mb-2  o">An item</li>
    <li className="list-group-item mb-2">A second item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
  </ul>
  </div>
    <div className="col-2 mt-2">
    <ul className="list-group list-group-flush rounded">
    <li className="list-group-item mb-2">An item</li>
    <li className="list-group-item mb-2">A second item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
  </ul>
    </div>

    <div className="col-2 mt-2">
    <ul className="list-group list-group-flush">
    <li className="list-group-item mb-2">An item</li>
    <li className="list-group-item mb-2">A second item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
  </ul>
    </div>
    <div className="col-2 mt-2">
    <ul className="list-group list-group-flush">
    <li className="list-group-item mb-2 text-danger">An item</li>
    <li className="list-group-item mb-2 text-danger">A second item</li>
    <li className="list-group-item mb-2 text-danger">A third item</li>
    <li className="list-group-item mb-2 text-danger">A third item</li>
    <li className="list-group-item mb-2 text-danger">A third item</li>
  </ul>
    </div>
    <div className="col-2 mt-2">
    <ul className="list-group list-group-flush">
    <li className="list-group-item mb-2">An item</li>
    <li className="list-group-item mb-2">A second item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
    <li className="list-group-item mb-2">A third item</li>
  </ul>
    </div>
    <div className="col-2 mt-3">
    <ul className="list-group list-group-flush">
    <button className="btn btn-outline-secondary bg-warning m-auto mb-2 w-50" style={{ color:'black'}} type="button" id="button-addon2">Pay</button>
    <button className="btn btn-outline-secondary bg-warning m-auto mb-2 w-50" style={{ color:'black'}} type="button" id="button-addon2">Pay</button>
    <button className="btn btn-outline-secondary bg-warning m-auto mb-2 w-50" style={{ color:'black'}} type="button" id="button-addon2">Pay</button>
    <button className="btn btn-outline-secondary bg-warning m-auto mb-2 w-50" style={{ color:'black'}} type="button" id="button-addon2">Pay</button>
    <button className="btn btn-outline-secondary bg-warning m-auto mb-2 w-50" style={{ color:'black'}} type="button" id="button-addon2">Pay</button>
  </ul>
    </div>
  </div>
</div>
</div>
</Col>
<Col>
<div className="card w-75 bg-dark m-auto   " >
<BookSection bookData={bookData}  /> 
</div>
</Col>
       </Row>
      </Container>
   
     
    </>
    );
}

export default UserPatronPage