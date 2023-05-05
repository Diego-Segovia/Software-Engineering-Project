import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchBooks } from "../utils/utils";

function SearchBar(props, {getResults}) {
  const [books, setBooks] = useState([]);
  const [key, setKey] = useState('booktitle');

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);
  
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
    <div className="container">
      <div className="input-group mb-3 mt-3 mx-auto w-50 row g-1">
        {props.hasFilter && (
          <div className="col-md-2">
            <select className="form-select" value={key} onChange={handleChange} aria-label="Book Search Filter">
              <option value="booktitle">Title</option>
              <option value="authors">Author</option>
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
			onChange = {filterSearch}
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
