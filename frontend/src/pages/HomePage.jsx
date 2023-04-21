import BookSection from "../components/UI/BookSection";
import Jumbotron from "../components/UI/Jumbotron";
import SearchBar from "../components/UI/SearchBar";
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
