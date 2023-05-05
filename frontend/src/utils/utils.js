export async function fetchBooks(setBooks, formatted = false) {
  try {
    console.log("Getting All Book Data...");

    // Fetch book data from the API
    const response = await fetch("http://localhost:3005/api/books");

    // Parse the JSON data from the response
    const books = await response.json();

    if (formatted) {
      const formattedBooks = books.map((book) => {
        return {
          Cover: book.bookimage,
          ISBN: book.isbn,
          Title: book.booktitle,
          "Author(s)":
            book.authors[0].firstname + " " + book.authors[0].lastname,
          Genre: book.genre.genredesc,
          Publisher:
            book.publisher.publishername +
            " (" +
            book.publisher.publishyear +
            ")",
          Copies: book.numcopies,
        };
      });
      setBooks(formattedBooks);
    }

    // Update the books state with the fetched data
    if (!formatted) setBooks(books);
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

export async function fetchPatrons(setPatrons) {
  try {
    // Fetch patron data from the API
    const response = await fetch("http://localhost:3005/api/users");

    // Parse the JSON data from the response
    const data = await response.json();

    const allPatrons = data.map((patron) => {
      return {
        "User ID": patron.userid,
        "First Name": patron.firstname,
        "Last Name": patron.lastname,
        Username: patron.authusername,
      };
    });

    // Update the books state with the fetched data
    setPatrons(allPatrons);
  } catch (error) {
    console.log("Error fetching patrons: ", error);
  }
}

export async function getLoans(setLoans, setCheckoutRequests) {
  try {
    // Fetch patron data from the API
    const response = await fetch("http://localhost:3005/api/loans");

    // Parse the JSON data from the response
    const data = await response.json();
    const loans = [];
    const checkoutRequests = [];

    data.map((loan) => {
      let fineData = { fineamt: 0, finedesc: "" };
      if (loan.fine !== null) fineData = loan.fine;
      if (loan.loan_status.statusdesc === "Pending") {
        checkoutRequests.push({
          "Loan ID": loan.loanid,
          "Book Title": loan.book.booktitle,
          ISBN: loan.book.isbn,
          Copies: loan.book.numcopies,
          "Patron Name": loan.user.firstname + " " + loan.user.lastname,
          Username: loan.user.authusername,
          "Loan Status": loan.loan_status.statusdesc,
        });
      } else {
        loans.push({
          "Loan ID": loan.loanid,
          "Book Title": loan.book.booktitle,
          ISBN: loan.book.isbn,
          Copies: loan.book.numcopies,
          "Patron Name": loan.user.firstname + " " + loan.user.lastname,
          Username: loan.user.authusername,
          "Loan Status": loan.loan_status.statusdesc,
          "Checkout Date": loan.loandate,
          "Return Date": loan.returndate,
          Fine: "$" + fineData.fineamt,
          "Fine Description": fineData.finedesc,
        });
      }
    });

    setLoans(loans);
    setCheckoutRequests(checkoutRequests);
  } catch (error) {
    console.log("Error fetching loans: ", error);
  }
}

export async function deleteLoan(loanID) {
  try {
    const response = await fetch(
      `http://localhost:3005/api/loans/delete/${loanID}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(JSON.stringify(data));
  } catch (error) {
    console.log("Error deleting loan: ", error);
  }
}

export async function approveLoan(loanID) {
  try {
    const response = await fetch(
      `http://localhost:3005/api/loans/loanOut/${loanID}`,
      {
        method: "PATCH",
      }
    );
    const data = await response.json();
    console.log(JSON.stringify(data));
  } catch (error) {
    console.log("Error deleting loan: ", error);
  }
}

export function validateSignUpData(data, setErrorMessage) {
  if (data.firstname.length == 0) {
    setErrorMessage("First Name Required!");
    return false;
  }

  if (data.lastname.length == 0) {
    setErrorMessage("Last Name Required!");
    return false;
  }

  if (data.authusername.length == 0) {
    setErrorMessage("Username Required!");
    return false;
  }

  // Check if the password length is at least 8 characters
  if (data.authpassword.length == 0) {
    setErrorMessage("Password Required!");
    return false;
  }

  // Check if the password length is at least 8 characters
  if (data.authpassword.length < 8) {
    setErrorMessage("Password must be 8 characters!");
    return false;
  }

  return true;
}
