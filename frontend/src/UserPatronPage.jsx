import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/UI/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookSection from "./components/UI/BookSection";
import DetailedBook from "./components/UI/DetailedBook";
import Jumbotron from "./components/UI/Jumbotron";



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
      <NavBar />
     
      <Container fluid>
        <Row variant="dark" className="  dark" style={{ border: '25px solid tan' , position: 'relative'}}>
          <Col className="d-flex align-items-center justify-content-left col-3"
          style={{ position: 'relative', border: '5px solid tan' , background:"gray"}}>
            <div  className="  m-auto"
            style={{  border: '1px solid white' }}>
              <h1 className=" text-center w-100" style={{  }}>Kennedi Serrano</h1>
              
              <Card style={{ width: '18rem', border: '1px solid white' , marginTop:'50px'}}>
                <Card.Img variant="top" 
                className=" d-flex justify-content-center m-auto"
                src="https://m.media-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg" style={{ width: '100%', height: '400px' }} />
                <Card.Body>
                  <Button variant="dark" className=" d-flex justify-content-center m-auto">Change Image</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className="d-flex   col-2 justify-content-center m-auto"
          style={{  border: '5px solid tan' , position: 'relative', background:"tan", color:"white"}}> 
          <div 
           style={{  border: '1px solid tan'}}>
              <h1 className="text-center w-100 " style={{ border: '5px solid tan', color:"white" }}>First Name</h1>
              <h1 className=" text-center w-100" style={{ border: '5px solid white' }}>Last Name</h1>
              <h1 className=" text-center w-100" style={{ border: '5px solid white' }}>Email</h1>
              <h1 className=" text-center w-100" style={{ border: '5px solid white' }}>Address</h1>
              <h1 className=" text-center w-100" style={{ border: '5px solid white' }}>City</h1>
              <h1 className=" text-center w-100" style={{ border: '5px solid white' }}>ZipCode</h1>
             

             
              
            </div>
          </Col>
          <Col className="d-flex   col-6  justify-content-center m-auto"
          style={{  border: '5px solid white' , position: 'relative'}}> 
          <div 
           style={{  border: '1px solid white'}}
           className="   w-100">
             
            
              <div className="input-group mb-4" style={{ border: '5px solid white' }}>
             <input type="text" className="form-control w-80" placeholder="Recipient's Firstname" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group mb-4" style={{ border: '5px solid white' }}>
             <input type="text" className="form-control w-80" placeholder="Recipient's Lastname" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group mb-4 h-4">
             <input type="email" className="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>
              
              <div className="input-group mb-4">
             <input type="text" className="form-control" placeholder="Recipient's Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>
             
              <div className="input-group mb-4">
             <input type="text" className="form-control" placeholder="Recipient's City" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>

              <div className="input-group mb-3">
             <input type="number" className="form-control" placeholder="Recipient's Zipcode" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
            </div>

              <Button variant="dark" className="  w-50 d-flex justify-content-center m-auto "
              style={{   }}>Save</Button>

             
              
            </div>
          </Col>
        </Row>
        
          
      
    
      
         
       
        <Row className="  " style={{ border: '25px solid tan' , position: 'relative'}}>
        <BookSection bookData={bookData} />
       </Row>
      </Container>
   
     
    </>
    );
}

export default UserPatronPage