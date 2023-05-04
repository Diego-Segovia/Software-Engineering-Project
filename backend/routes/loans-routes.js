const express = require("express");
const router = express.Router();
const { createLoan, getLoans, deleteLoan, approveLoan, getLoansWithFinesByPatronId } = require("../actions");

router.post("/", createLoan);
router.get("/", getLoans);
router.delete("/delete/:loanId", deleteLoan);
router.patch("/loanOut/:loanId", approveLoan);

router.get("/:patronId/fines", getLoansWithFinesByPatronId);

module.exports = router;
