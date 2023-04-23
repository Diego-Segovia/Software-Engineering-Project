import BookSection from "../components/BookSection";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { fetchBooks } from "../utils/utils";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <>
      <Jumbotron />
      <SearchBar />
      <BookSection bookData={books} />
    </>
  );
}

export default HomePage;
