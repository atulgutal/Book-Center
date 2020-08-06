let service = {
  signup: (req, res) => {
    console.log("auth router");
    console.log(req.body);
  },
  signin: (req, res) => {
    console.log("auth router");
    console.log(req.body);
  }
};

module.exports.service = service;
