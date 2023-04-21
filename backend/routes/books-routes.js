const express = require("express");
const router = express.Router();
const { getDbBooks } = require("../actions");

router.use("/books", (req, res, next) => {
  getDbBooks(req, res);
});

module.exports = router;
