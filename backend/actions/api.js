const db = require("../models");

const bookInfo = {
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

const getBooks = async (req, res) => {
  const data = await db.Book.findAll(bookInfo);
  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

const getBookById = async (req, res) => {
  const bookId = req.params.bookId;

  const book = await db.Book.findOne({
    where: { bookid: bookId },
    ...bookInfo,
  });

  if (book) {
    res.json(book.toJSON());
    console.log("A book was found.");
  } else {
    res.status(404).send(`No book found with id: ${bookId}`);
    console.log(`No book found with bookId: ${bookId}`);
  }
};

module.exports = {
  getBooks,
  getBookById,
};
