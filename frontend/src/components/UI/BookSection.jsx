import Card from "react-bootstrap/Card";
import BookCarousel from "./BookCarousel";

function BookSection() {
  return (
    <Card className="m-2 p-0 shadow">
      <Card.Body>
        <BookCarousel />
      </Card.Body>
    </Card>
  );
}

export default BookSection;
