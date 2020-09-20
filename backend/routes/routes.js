const express = require("express");
let authservice = require("../services/authservice");

const router = express.Router();

router.post("/v1/users", authservice.service.signup);

module.exports = router;
