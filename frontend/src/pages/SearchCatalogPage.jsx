import DetailedBook from "../components/UI/DetailedBook";
import SearchBar from "../components/UI/SearchBar";

function SearchCatalogPage() {
  return (
    <>
      <SearchBar />
      <div className="row w-100">
        <div className="col-md-4 mx-3">
          <div className="card bg-light" style={{ height: "40rem" }}>
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
          <DetailedBook />
          <DetailedBook />
          <DetailedBook />
        </div>
      </div>
    </>
  );
}
export default SearchCatalogPage;
