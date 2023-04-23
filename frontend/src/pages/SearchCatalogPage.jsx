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
      <SearchBar hasFilter={true} />
      <div className="row w-100">
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
