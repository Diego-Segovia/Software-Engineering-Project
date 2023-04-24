import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  return (
    <div className="container">
      <div className="input-group mb-3 mt-3 mx-auto w-50 row g-1">
        {props.hasFilter && (
          <div className="col-md-2">
            <select className="form-select" aria-label="Book Search Filter">
              <option selected>Title</option>
              <option value="author">Author</option>
              <option value="genre">Genre</option>
            </select>
          </div>
        )}
        <div className="input-group col">
          <input
            type="text"
            className="form-control"
            placeholder="Start Searching..."
            style={{ outline: "none" }}
          />
          <button className="btn btn-primary">
            <FontAwesomeIcon className="mx-auto" icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
