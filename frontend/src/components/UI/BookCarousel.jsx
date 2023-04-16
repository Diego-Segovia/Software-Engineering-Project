import "./BookCarousel.css";
import "./BookCarousel-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import Book from "./Book";

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-next" onClick={onClick}></div>;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-prev" onClick={onClick}></div>;
};

export default class BookCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ms-5 me-5 p-3">
        <h3>Featured</h3>
        <hr />
        <Slider {...settings}>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
          <div>
            <Book />
          </div>
        </Slider>
      </div>
    );
  }
}
