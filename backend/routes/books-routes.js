const express = require("express");
const router = express.Router();
const { getBooks, getBookById } = require("../actions");

router.use("/books/:bookId", getBookById);

router.use("/books", getBooks);

module.exports = router;
