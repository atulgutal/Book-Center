const express = require("express");
let authservice = require("../services/authservice");
let bookservice = require("../services/bookservice");
let jwt = require("./../commons/jwt");

//const router = express.Router();

//router.post("/v1/users", authservice.service.signup);

//module.exports = router;

module.exports = express => {
  let router = express.Router();
  try {
    /** Auth routes*/
    router.post("/v1/signup", authservice.service.signup);
    router.post("/v1/signin", authservice.service.signin);

    /** Homepage routes*/
    router.get("/v1/books", jwt.verifyRequest, bookservice.service.create);

    return router;
  } catch (error) {
    console.log(error);
    res.send({
      error,
      message: "API not found"
    });
  }
};
