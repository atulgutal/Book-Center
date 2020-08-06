var express = require("express");
const auth_service = express.Router();

auth_service.post("/signup", (req, res) => {
  console.log("auth router");
  console.log(req.body);
});

module.exports = auth_service;
