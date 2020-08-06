const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const auth_router = require("./services/auth");
const port = process.env.PORT || 5001;
const cors = require("cors");
//require('./db');

app.use(bodyParser.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "50mb",
    extended: true
  })
);

app.use("/", auth_router);

//app.use('/login', auth_router);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
