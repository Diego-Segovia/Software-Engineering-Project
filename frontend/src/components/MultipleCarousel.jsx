import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Carousel.css";

function MultipleCarousel() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <div className="row">
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg"
              alt="First slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320508235i/824734.jpg"
              alt="Second slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388179389i/948526.jpg"
              alt="Third slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387411058i/18371567.jpg"
              alt="Fourth slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row">
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5.jpg"
              alt="Fifth slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1563042852i/49628.jpg"
              alt="Sixth slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
              alt="Seventh slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388260031i/60781.jpg"
              alt="Eighth slide"
              style={{ height: "200px" }}
            />
            <div class="movie-title">
              <a href="#">
                <p class="text-white text-sm-center font-small flex-center">
                  Percy Jackson
                </p>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MultipleCarousel;
