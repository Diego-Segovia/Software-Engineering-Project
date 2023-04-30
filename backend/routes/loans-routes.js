const express = require("express");
const router = express.Router();
const { createLoan } = require("../actions");

router.post("/loans", createLoan);

module.exports = router;
