const express = require("express");
const { createUser, loginUser } = require("../controllers/users");
const router = express.Router();

router.post("/", createUser);
router.post("/", loginUser);
