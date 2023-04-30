const express = require("express");
const router = express.Router();
const { signUpUser, loginUser, getUsers, getUserById } = require("../actions");

router.get("/users", getUsers);

router.get("/users/:userId", getUserById);

router.post("/signup", signUpUser);

router.post("/login", loginUser);

module.exports = router;
