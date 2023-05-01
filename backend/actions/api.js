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

const userProfileInfoQuery = {
  attributes: [
    "firstname",
    "lastname",
    "userRole",
    "userimage",
    "authusername"
  ]

};

// Retrieve all books from database 
const getBooks = async (req, res) => {
  const data = await db.Book.findAll(generalBookInfoQuery);
  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

// Retrieve a specific book based on ID
const getBookById = async (req, res) => {
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
const createLoan = async (req, res) => {
  try {
    const loan = await db.Loan.create(req.body);
    console.log("Loan created successfully.");
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Loan creation error!");
  }
};

// Retrieve a users from database
const getUsers = async (req, res) => {
  const data = await db.User.findAll(userProfileInfoQuery);
  
  const usersJSON = data.map((user) => user.toJSON());

  res.json(usersJSON);

  console.log("Users sent!");
};

const getUserById = async (req, res) => {
  const authUsername = req.params.authusername;

  const user = await db.User.findOne({
    where:{authusername: authUsername}, 
    ...userProfileInfoQuery,
  });

  if(user){
    res.json(user.toJSON());
    console.log(`yay user: ${authUsername} was found!`)
  }else{
    res.status(400).json({error: error.message});
    console.log("error user not found!")

  }
};



module.exports = {
  getBooks,
  getBookById,
  createLoan,
  getUsers,
  getUserById,
};
