import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById, sendLoanRequest } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../utils/auth-context";
import {
  faCalendarDays,
  faBuilding,
  faBarcode,
  faBookReader,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

function DetailBookPage() {
  const auth = useContext(AuthContext);

  // Get the route parameters as an object (e.g., bookId)
  const params = useParams();

  // Hold book data
  const [book, setBook] = useState();

  // Hold visibility state for loan alert
  const [visible, setVisible] = useState(false);

  // Hold success state for loan alert
  const [wasSuccessful, setWasSuccessful] = useState(false);

  // Dismiss alert
  const handleClose = () => setVisible(false);

  const onClickHandler = async () => {
    // Get the current date
    const currentDate = new Date();

    // Calculate a date one week from the current date
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(currentDate.getDate() + 7);

    // Create a loan request data object
    const data = {
      bookid: book.bookid,
      patronid: 1,
      librarianid: 4,
      loandate: currentDate.toISOString().slice(0, 10),
      returndate: oneWeekFromNow.toISOString().slice(0, 10),
      statusid: 5,
    };

    // Send the loan request and await the result
    const wasRequestSuccessful = await sendLoanRequest(data);

    // Set the visibility state for alert to true
    setVisible(true);

    // Update the success state with the result of the loan request
    setWasSuccessful(wasRequestSuccessful);
  };

  // Retrieve book data by book ID
  useEffect(() => {
    fetchBookById(setBook, params.bookId);
  }, []);

  // Empty element for initial component render
  if (!book) return <div></div>;

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
            {auth.isLoggedIn && !auth.isLibrarian && (
              <button
                type="button"
                class="btn btn-dark btn-lg mb-2"
                onClick={onClickHandler}
              >
                Check Out
              </button>
            )}
            {auth.isLoggedIn && auth.isLibrarian && (
              <>
                <button
                  type="button"
                  class="btn btn-success btn-lg mb-2 me-3"
                  onClick={onClickHandler}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-lg mb-2"
                  onClick={onClickHandler}
                >
                  Delete
                </button>
              </>
            )}
            {visible && (
              <div class="d-flex justify-content-center align-items-center center-wrapper">
                <div
                  className={`alert ${
                    wasSuccessful ? "alert-success" : "alert-danger"
                  } alert-dismissible fade show`}
                  role="alert"
                >
                  {wasSuccessful ? "Checkout Requested" : "Try Again!"}
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
              </div>
            )}
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
