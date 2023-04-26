import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBuilding,
  faBarcode,
  faBookReader,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

function DetailBookPage() {
  const params = useParams();

  const [book, setBook] = useState();

  useEffect(() => {
    fetchBookById(setBook, params.bookId);
  }, []);

  if (!book) {
    return <div></div>;
  }

  return (
    <div className="container mx-auto m-4">
      <div className="card shadow" style={{ backgroundColor: "#E8DFDA" }}>
        <div className="row">
          <div className="col-lg-3 text-center">
            <img
              src={book.bookimage}
              alt=""
              className="img-fluid rounded m-3"
            />
            <button type="button" class="btn btn-dark btn-lg mb-2">
              Check Out
            </button>
          </div>
          <div className="col px-5 pt-2">
            <h1 className="fs-1">{book.booktitle}</h1>
            <h5 className="fs-4">
              by {book.authors[0].firstname} {book.authors[0].lastname}
            </h5>
            <br />
            <p className="text-muted fs-5">Synopsis</p>
            <p className="fs-5">{book.synopsis}</p>
            <hr />
            <div className="row">
              <div className="col text-center">
                <div>
                  <strong>Publisher</strong>
                  <div className="fs-2">
                    <FontAwesomeIcon className="mx-auto" icon={faBuilding} />
                  </div>
                  <p>{book.publisher.publishername}</p>
                </div>
              </div>
              <div className="col text-center">
                <div>
                  <strong>Publish Year</strong>
                  <div className="fs-2">
                    <FontAwesomeIcon
                      className="mx-auto"
                      icon={faCalendarDays}
                    />
                  </div>
                  <p>{book.publisher.publishyear}</p>
                </div>
              </div>
              <div className="col text-center">
                <div>
                  <strong>ISBN</strong>
                  <div className="fs-2">
                    <FontAwesomeIcon className="mx-auto" icon={faBarcode} />
                  </div>
                  <p>{book.isbn}</p>
                </div>
              </div>
              <div className="col text-center">
                <div>
                  <strong>Genre</strong>
                  <div className="fs-2">
                    <FontAwesomeIcon className="mx-auto" icon={faNoteSticky} />
                  </div>
                  <p>{book.genre.genredesc}</p>
                </div>
              </div>
              <div className="col text-center">
                <div>
                  <strong>Copies</strong>
                  <div className="fs-2">
                    <FontAwesomeIcon className="mx-auto" icon={faBookReader} />
                  </div>
                  <p>{book.numcopies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBookPage;
