const express = require("express");
const router = express.Router();
const { signUpUser, loginUser, getUsers, getUserById, updateUserData } = require("../actions");

router.get("/:userId", getUserById);

router.get("/", getUsers);

router.post("/signup", signUpUser);

router.post("/login", loginUser);

router.put("/updateUser", updateUserData);

module.exports = router;
