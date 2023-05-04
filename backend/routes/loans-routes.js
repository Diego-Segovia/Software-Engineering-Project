const express = require("express");
const router = express.Router();
const { createLoan, getLoansWithFinesByPatronId } = require("../actions");

router.post("/", createLoan);
router.get("/:patronId/fines", getLoansWithFinesByPatronId);

module.exports = router;
