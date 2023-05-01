const express = require("express");
const router = express.Router();
const { signUpUser, loginUser, getUsers, getUserById } = require("../actions");

router.get("/:userId", getUserById);

router.get("/", getUsers);

router.post("/signup", signUpUser);

router.post("/login", loginUser);

module.exports = router;
