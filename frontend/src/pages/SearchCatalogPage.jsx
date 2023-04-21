import DetailedBook from "../components/UI/DetailedBook";
import SearchBar from "../components/UI/SearchBar";
import { useEffect, useState } from "react";
import { fetchBooks } from "../utils/utils";

function SearchCatalogPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);
  return (
    <>
      <SearchBar />
      <div className="row w-100">
        <div className="col-md-2 mx-3 mb-3">
          <div className="card bg-light p-2">
            <div className="m-3">
              <h5 className="mb-4">Filter</h5>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
              />
            </div>
            <div className="m-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Author"
              />
            </div>
            <div className="m-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Genre"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {books.map((book) => (
              <div className="col-lg-6 mb-3">
                <DetailedBook bookInfo={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchCatalogPage;
