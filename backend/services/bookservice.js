const rs = require("./../commons/responses");

let service = {
  create: async (req, res) => {
    console.log("Book service create");
    console.log(req.body);
  }
};

module.exports.service = service;
