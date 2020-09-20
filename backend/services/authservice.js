const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

let service = {
  signup: async (req, res) => {
    //console.log(req.body);
    const salt = bcrypt.genSaltSync(saltRounds);
    const userpassword = bcrypt.hashSync(req.body.userpassword, salt);

    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      useremail: req.body.useremail,
      userpassword: userpassword,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      zipcode: req.body.zipcode
    });
    //console.log(newUser);
    try {
      const user = await User.findOne({
        useremail: newUser.useremail
      });

      if (user !== null) {
        //console.log(user);
        return res.status(400).send("User already exists");
      }

      const userInfo = await newUser.save();
      res.status(200).send({
        message: "User register successfully",
        userId: userInfo._id
      });
    } catch (e) {
      res.send({
        e,
        message: "User not register successfully"
      });
    }
  },
  signin: (req, res) => {
    console.log("auth router");
    //console.log(req.body);
    // if (bcrypt.compareSync(req.body.userpassword, user.userpassword)) {
    //   console.log("same");
    // } else {
    //   console.log("not same");
    // }
  }
};

module.exports.service = service;
