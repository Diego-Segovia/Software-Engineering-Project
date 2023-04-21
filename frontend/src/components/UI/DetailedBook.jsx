import Book from "./Book";

function DetailedBook(props) {
  const book = props.bookInfo;

  return (
    <>
      <div className="card h-100 mx-3 w-100 mb-2">
        <div className="row g-0">
          <div className="col-md-4 mt-3 ms-3">
            <Book bookInfo={book}></Book>
          </div>
          <div className="col-xxl-7">
            <div className="card-body">
              <h5 className="card-title">{book.booktitle}</h5>
              <p>
                by {book.authors[0].firstname} {book.authors[0].lastname}
              </p>
              <p className="text-muted">Synopsis</p>
              <p className="card-text">{book.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailedBook;
