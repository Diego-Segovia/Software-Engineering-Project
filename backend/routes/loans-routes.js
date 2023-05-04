const express = require("express");
const router = express.Router();
const { createLoan, getLoans, deleteLoan, approveLoan } = require("../actions");

router.post("/", createLoan);
router.get("/", getLoans);
router.delete("/delete/:loanId", deleteLoan);
router.patch("/loanOut/:loanId", approveLoan);
module.exports = router;
