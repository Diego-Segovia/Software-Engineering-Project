const db = require("../models");

const getBooks = async (req, res) => {
  const data = await db.Book.findAll({
    attributes: ["isbn", "booktitle", "numcopies", "bookimage", "synopsis"],
    include: [
      {
        model: db.Author,
        attributes: ["firstname", "lastname"],
        through: { attributes: [] }, // Exclude the join table (AuthorBook) attributes
      },
      { model: db.Genre, attributes: ["genredesc"] },
      { model: db.Publisher, attributes: ["publishername", "publishyear"] },
    ],
  });

  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

module.exports = {
  getBooks,
};
