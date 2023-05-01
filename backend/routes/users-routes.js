const express = require('express');
const router = express.Router();
const {getUsers, getUserById} = require("../actions");

router.use("/users", (req, res, next) => { 
    getUsers(req, res);
});

router.use("/users/:authUsername",(req, res, next) =>{
    getUserById(req, res);
});

module.exports = router;