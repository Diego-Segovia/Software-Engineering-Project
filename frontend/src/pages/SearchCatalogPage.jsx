import DetailedBook from "../components/DetailedBook";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { fetchBooks } from "../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchCatalogPage() {
  const [books, setBooks] = useState([]);
  const [filtered,setFiltered] = useState([]);
  
  const getResults = (results) => {
	  setFiltered(results);
  }

  useEffect(() => {
    fetchBooks(setBooks);
	fetchBooks(setFiltered);
  }, []);
  
  //Filtered Lists
  
  const [filteredData, setFilterData] = useState(books);
  
  const isMatch = (value, word) => {
	if(typeof value === typeof []){
		for(const i of value){
			if(typeof i === typeof []) isMatch(Object.values(i), word);
			if(i.toString().toLowerCase().includes(word.toLowerCase())) return true;
		}
	}
	return false;
  }
  
    const filterSearch = (event) => {
	  const word = event.target.value;
	  const filteredList = books.filter((elementInfo) => {
		  //return value.booktitle.toLowerCase().includes(word.toLowerCase());
		  return isMatch(Object.values(elementInfo), word);
	  });
	  setFilterData(filteredList);
	  getResults(filteredData);
  }
  
  const handleChange = (event) => {
	  setKey(event.target.value);
  }
  
  return (
    <>
	{/*<SearchBar hasFilter={false} getResults={getResults} data={books}/>*/}
	<div className="container">
      <div className="input-group mb-3 mt-3 mx-auto w-50 row g-1">
        <div className="input-group col">
          <input
            type="text"
            className="form-control"
            placeholder="Start Searching..."
            style={{ outline: "none" }}
			onChange = {filterSearch}
          />
          <button className="btn btn-primary">
            <FontAwesomeIcon className="mx-auto" icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
	
      <div className="row w-100">
        <div className="col">
          <div className="row">
            {filtered.map((book) => (
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
