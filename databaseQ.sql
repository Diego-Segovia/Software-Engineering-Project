-- SQL queries for creating necessary tables in PostgreSQL.

-- Author
CREATE TABLE Author (
  authorID SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL
);

-- Genre
CREATE TABLE Genre (
  genreID SERIAL PRIMARY KEY,
  genreDesc VARCHAR(255) NOT NULL
);

-- Publisher
CREATE TABLE Publisher (
  publisherID SERIAL PRIMARY KEY,
  publisherName VARCHAR(255) NOT NULL,
  publishYear INTEGER
);

-- Book
CREATE TABLE Book (
  bookID SERIAL PRIMARY KEY,
  bookTitle VARCHAR(255) NOT NULL,
  bookImage VARCHAR(255) NOT NULL,
  publisherID INTEGER REFERENCES Publisher(publisherID),
  genreID INTEGER REFERENCES Genre(genreID),
  numCopies INTEGER NOT NULL
);

-- Author_Book Normalization
CREATE TABLE Author_Book (
  ID SERIAL PRIMARY KEY,
  authorID INTEGER REFERENCES Author(authorID),
  bookID INTEGER REFERENCES Book(bookID)
);

-- Users Supertype
CREATE TABLE Users (
  UserID SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  userImage VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Status
CREATE TABLE Status (
  statusID SERIAL PRIMARY KEY,
  statusDesc VARCHAR(255) NOT NULL
);

-- Library Patron Subtype
CREATE TABLE Library_Patron (
  patronID INTEGER PRIMARY KEY REFERENCES Users(UserID),
  statusID INTEGER REFERENCES Status(statusID)
);

-- Librarian SUbtype
CREATE TABLE Librarian (
  librarianID INTEGER PRIMARY KEY REFERENCES Users(UserID)
);

-- Fine
CREATE TABLE Fine (
  fineID SERIAL PRIMARY KEY,
  fineAMT FLOAT NOT NULL,
  fineDesc VARCHAR(255) NOT NULL
);

-- Loan
CREATE TABLE Loan (
  loanID SERIAL PRIMARY KEY,
  bookID INTEGER REFERENCES Book(bookID),
  patronID INTEGER REFERENCES Library_Patron(patronID),
  fineID INTEGER REFERENCES Fine(fineID),
  librarianID INTEGER REFERENCES Librarian(librarianID),
  loanDate DATE NOT NULL,
  returnDate DATE NOT NULL
);