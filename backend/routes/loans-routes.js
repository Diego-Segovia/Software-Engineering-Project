const express = require("express");
const router = express.Router();
const { createLoan } = require("../actions");

router.post("/loans", (req, res, next) => {
  createLoan(req, res);
});

module.exports = router;
