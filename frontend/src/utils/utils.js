export async function fetchBooks(setBooks) {
  try {
    console.log("Getting Book Data...");
    // Fetch book data from the API
    const response = await fetch("http://localhost:3005/books");
    // Parse the JSON data from the response
    const data = await response.json();
    // Update the books state with the fetched data
    setBooks(data);
  } catch (error) {
    console.log("Error fetching books: ", error);
  }
}

export async function fetchBookById(setBook, bookId) {
  try {
    console.log("Getting Book Data...");
    // Fetch book data from the API
    const response = await fetch(`http://localhost:3005/books/${bookId}`);
    // Parse the JSON data from the response
    const data = await response.json();
    // Update the books state with the fetched data
    setBook(data);
  } catch (error) {
    console.log("Error fetching books: ", error);
  }
}
