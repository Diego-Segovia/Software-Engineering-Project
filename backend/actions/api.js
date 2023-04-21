const db = require("../models");

const getBooks = async (req, res) => {
  const data = await db.Book.findAll({
    include: [
      {
        model: db.Author,
        through: { attributes: [] }, // Hide the intermediate table attributes in the output
      },
    ],
  });
  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

module.exports = {
  getBooks,
};
