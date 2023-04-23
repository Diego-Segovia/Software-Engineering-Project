import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <>
      <div className="container">
        <div className="input-group mb-3 mt-3 mx-auto w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Start Searching..."
          />
          <button className="btn btn-primary">
            <FontAwesomeIcon className="mx-auto" icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
