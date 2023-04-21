const express = require("express");
const router = express.Router();
const { getBooks } = require("../actions");

router.use("/books", (req, res, next) => {
  getBooks(req, res);
});

module.exports = router;
