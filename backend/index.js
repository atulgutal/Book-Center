const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const auth_router = require("./services/authservice");
const port = process.env.PORT || 5004;
const cors = require("cors");
let routes = require("./routes/routes")(express);
require("./commons/db");

app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.set({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
//     "Access-Control-Allow-Headers": "Content-Type"
//   });
//   next();
// });

app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "50mb",
    extended: true
  })
);

app.use("/", routes);
//app.use("/", auth_router);

//app.use('/login', auth_router);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
