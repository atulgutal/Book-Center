const express = require("express");
let authservice = require("../services/authservice");

const router = express.Router();

router.post("/signup", authservice.service.signup);

module.exports = router;
