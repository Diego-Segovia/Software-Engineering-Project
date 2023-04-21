const { models } = require("../models");

const getDbBooks = async (req, res) => {
  const data = await models.book.findAll();
  const booksJSON = data.map((book) => book.toJSON());
  res.json(booksJSON);
  console.log("Books sent!");
};

module.exports = {
  getDbBooks,
};
