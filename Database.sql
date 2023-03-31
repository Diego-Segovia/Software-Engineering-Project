-- SQL queries for creating necessary tables in PostgreSQL.

CREATE TABLE Author (
  authorID SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  bookID INTEGER,
  publisherID INTEGER
);

CREATE TABLE Author_Book (
  ID SERIAL PRIMARY KEY,
  authorID INTEGER REFERENCES Author(authorID),
  bookID INTEGER
);

CREATE TABLE Genre (
  genreID SERIAL PRIMARY KEY,
  genreDesc VARCHAR(255) NOT NULL
);

CREATE TABLE Publisher (
  publisherID SERIAL PRIMARY KEY,
  publisherName VARCHAR(255) NOT NULL,
  publishYear INTEGER,
  authorID INTEGER REFERENCES Author(authorID),
  bookID INTEGER
);

CREATE TABLE Book (
  bookID SERIAL PRIMARY KEY,
  bookTitle VARCHAR(255) NOT NULL,
  authorID INTEGER REFERENCES Author(authorID),
  publisherID INTEGER REFERENCES Publisher(publisherID),
  genreID INTEGER REFERENCES Genre(genreID),
  numCopies INTEGER NOT NULL
);

ALTER TABLE Author
ADD FOREIGN KEY (bookID) REFERENCES Book(bookID),
ADD FOREIGN KEY (publisherID) REFERENCES Publisher(publisherID);

ALTER TABLE Author_Book
ADD FOREIGN KEY (bookID) REFERENCES Book(bookID);

ALTER TABLE Publisher
ADD FOREIGN KEY (bookID) REFERENCES Book(bookID);

CREATE TABLE Users (
  UserID SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE Status (
  statusID SERIAL PRIMARY KEY,
  statusDesc VARCHAR(255) NOT NULL
);

CREATE TABLE Library_Patron (
  patronID INTEGER PRIMARY KEY REFERENCES Users(UserID),
  statusID INTEGER REFERENCES Status(statusID)
);

CREATE TABLE Librarian (
  librarianID INTEGER PRIMARY KEY REFERENCES Users(UserID)
);

CREATE TABLE Fine (
  fineID SERIAL PRIMARY KEY,
  fineAMT FLOAT NOT NULL,
  fineDesc VARCHAR(255) NOT NULL
);

CREATE TABLE Loan (
  loanID SERIAL PRIMARY KEY,
  bookID INTEGER REFERENCES Book(bookID),
  patronID INTEGER REFERENCES Library_Patron(patronID),
  fineID INTEGER REFERENCES Fine(fineID),
  librarianID INTEGER REFERENCES Librarian(librarianID),
  loanDate DATE NOT NULL,
  returnDate DATE NOT NULL
);
