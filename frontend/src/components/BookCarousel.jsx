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
    const books = this.props.bookData;

    const settings = {
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
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
      <div className="ms-3">
        <h3>Featured</h3>
        <hr />
        <div className="mb-3 mx-5">
          <Slider {...settings}>
            {books.map((book) => (
              <div className="mb-4">
                <Book bookInfo={book} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
