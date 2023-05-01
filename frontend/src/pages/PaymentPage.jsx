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

function PaymentPage(){
    return(
        
        <>
     
     
      <Container fluid   style={{ backgroundColor:"white" }}>
        <Row>
            <Col className="">
            <section class="p-4 p-md-5 ms-1 " >
  <div class="row d-flex justify-content-center">
    <div class="">
      <div class="card rounded-3">
        <div class="card-body p-4">
          <div class="text-center mb-4">
            <h3>Settings</h3>
            <h6>Payment</h6>
          </div>
          <form action="">
            <p class="fw-bold mb-4 pb-2">Saved cards:</p>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid"  />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="number" id="formControlLgXc" class="form-control form-control-lg"
                    />
                  <label className="form-label" for="formControlLgXc">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>

            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img className="img-fluid"  />
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <input type="number" id="formControlLgXs" class="form-control form-control-lg"
                     />
                  <label className="form-label" for="formControlLgXs">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>

            <p className="fw-bold mb-4">Add new card:</p>

            <div className="form-outline mb-4">
              <input type="text" id="formControlLgXsd" className="form-control form-control-lg"
                 />
              <label className="form-label" for="formControlLgXsd">Cardholder's Name</label>
            </div>

            <div className="row mb-4">
              <div className="col-7">
                <div className="form-outline">
                  <input type="number" id="formControlLgXM" className="form-control form-control-lg"
                     />
                  <label className="form-label" for="formControlLgXM">Card Number</label>
                </div>
              </div>
              <div class="col-3">
                <div className="form-outline">
                  <input type="password" id="formControlLgExpk" className="form-control form-control-lg"
                    placeholder="MM/YYYY" />
                  <label className="form-label" for="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-outline">
                  <input type="password" id="formControlLgcvv" className="form-control form-control-lg"
                    placeholder="Cvv" />
                  <label className="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button className="btn btn-success btn-lg btn-block">Finish Payment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

            </Col>

            <Col>
            <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your Fees</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Late fee</h6>
                <small class="text-muted"> Due: 5/21/22</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Second Late fee</h6>
                <small>Due: 4/05/23</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$10</strong>
            </li>
          </ul>

         
        </div>
            </Col>
        </Row>
     
       
        <Row>
            <div className="card">
                <div className="card-body bg-dark">

                </div>
            </div>
        </Row>
      

      
      </Container>
   
     
    </>
    );
}

export default PaymentPage