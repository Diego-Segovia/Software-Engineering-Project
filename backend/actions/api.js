const db = require("../models");

const generalBookInfoQuery = {
  attributes: [
    "bookid",
    "isbn",
    "booktitle",
    "numcopies",
    "bookimage",
    "synopsis",
  ],
  include: [
    {
      model: db.Author,
      attributes: ["firstname", "lastname"],
      through: { attributes: [] }, // Exclude the external table attributes
    },
    { model: db.Genre, attributes: ["genredesc"] },
    { model: db.Publisher, attributes: ["publishername", "publishyear"] },
  ],
};

// Retrieve all books from database
const getBooks = async (req, res, next) => {
  const data = await db.Book.findAll(generalBookInfoQuery);
  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

// Retrieve a specific book based on ID
const getBookById = async (req, res, next) => {
  const bookId = req.params.bookId;

  const book = await db.Book.findOne({
    where: { bookid: bookId },
    ...generalBookInfoQuery,
  });

  if (book) {
    res.json(book.toJSON());
    console.log(`Book ${bookId} was found.`);
  } else {
    res.status(404).send(`No book found with id: ${bookId}`);
    console.log(`No book found with bookId: ${bookId}`);
  }
};

// Create a book loan in database
const createLoan = async (req, res, next) => {
  try {
    const loan = await db.Loan.create(req.body);
    console.log("Loan created successfully.");
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Loan creation error!");
  }
};

const signUpUser = async (req, res, next) => {
  try {
    const user = await db.Users.create(req.body);
    console.log("User created successfully.");
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("User creation error!");
    console.log(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

const getUsers = async (req, res, next) => {
  try {
  } catch (error) {}
};

const getUserById = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports = {
  getBooks,
  getBookById,
  createLoan,
  signUpUser,
  loginUser,
  getUsers,
  getUserById,
};
