import { Link } from "react-router-dom";

function Book(props) {
  const book = props.bookInfo;
  return (
    <Link to={`/books/${book.bookid}`}>
      <div className="card" style={{ width: "14rem", height: "22rem" }}>
        <img
          className="card-img-top rounded h-100"
          src={book.bookimage}
          alt="Card image cap"
        ></img>
      </div>
    </Link>
  );
}

export default Book;
