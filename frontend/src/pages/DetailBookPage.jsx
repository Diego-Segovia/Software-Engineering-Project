import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../utils/utils";

function DetailBookPage() {
  const params = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBookById(setBook, params.bookId);
  }, []);

  return (
    <div className="container m-5">
      <img src={book.bookimage} alt="" style={{ width: "10%" }} />
      <h1>Title: {book.booktitle}</h1>
      <h5>
        Authors: {book.authors[0].firstname} {book.authors[0].lastname}
      </h5>
      <p>
        <strong>Synopsis:</strong> {book.synopsis}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher.publishername} (
        {book.publisher.publishyear})
      </p>
      <p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <strong>Copies:</strong> {book.numcopies}
      </p>
      <button type="button" class="btn btn-dark">
        Check Out
      </button>
    </div>
  );
}
export default DetailBookPage;
