export async function fetchBooks(setBooks) {
  try {
    console.log("Getting All Book Data...");

    // Fetch book data from the API
    const response = await fetch("http://localhost:3005/api/books");

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
    const response = await fetch(`http://localhost:3005/api/books/${bookId}`);

    // Parse the JSON data from the response
    const data = await response.json();

    // Update the books state with the fetched data
    setBook(data);
  } catch (error) {
    console.log("Error fetching books: ", error);
  }
}

export async function sendLoanRequest(data) {
  try {
    // Send a POST request to the loans API endpoint with the given data as a JSON payload
    const response = await fetch("http://localhost:3005/api/loans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is not 'ok' (status code not in the range 200-299)
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    // Parse the JSON response
    const loan = await response.json();

    // Display an alert with the success message and the loan details
    console.log("Loan created successfully: " + JSON.stringify(loan));

    // Return 'true' to indicate the request was successful
    return true;
  } catch (error) {
    // Display an alert with the error message
    console.log("Error: " + error.message);

    // Return 'false' to indicate the request failed
    return false;
  }
}

export async function createUser(data) {
  try {
    // Send a POST request to the signup API endpoint with the given data as a JSON payload
    const response = await fetch("http://localhost:3005/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is not 'ok' (status code not in the range 200-299)
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    // Parse the JSON response
    const userData = await response.json();

    // Display an alert with the success message and the loan details
    console.log("User created successfully: " + JSON.stringify(userData));

    // Return 'true' to indicate the request was successful
    return true;
  } catch (error) {
    // Display an alert with the error message
    console.log("Error: " + error.message);

    // Return 'false' to indicate the request failed
    return false;
  }
}

export async function loginUser(data) {
  try {
    const response = await fetch("http://localhost:3005/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Login error:", error);
  }
}
