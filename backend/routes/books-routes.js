const express = require("express");
const router = express.Router();
const { getBooks, getBookById } = require("../actions");

router.use("/books/:bookId", (req, res, next) => {
  getBookById(req, res);
});

router.use("/books", (req, res, next) => {
  getBooks(req, res);
});

module.exports = router;
