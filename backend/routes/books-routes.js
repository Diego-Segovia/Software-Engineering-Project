const express = require("express");
const router = express.Router();
const { getBooks, getBookById } = require("../actions");

router.use("/:bookId", getBookById);

router.use("/", getBooks);

module.exports = router;
