const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const rs = require("./../commons/responses");
let pv = require("./../commons/passwordVerification");
let jwt = require("./../commons/jwt");

let service = {
  signup: async (req, res) => {
    console.log(req.body);
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
    } catch (error) {
      res.send({
        error,
        message: "User not register successfully"
      });
    }
  },
  signin: async (req, res) => {
    //console.log(req.body);
    let useremail = req.body.useremail;
    let userpassword = req.body.userpassword;
    try {
      const user = await User.findOne(
        {
          useremail: useremail
        },
        {
          userpassword: 1
        }
      );
      //console.log(user);
      if (user == null) {
        //console.log(user);
        throw rs.signin;
      } else {
        const isMatch = await pv.verify(userpassword, user.userpassword);
        //console.log(isMatch);
        if (isMatch) {
          res.json({
            result: "success",
            response: [
              {
                message: "User Signed In Successfully",
                code: "SIGNIN"
              }
            ],
            userId: user._id,
            token: await jwt.generate({
              payload: user
            })
          });
        } else {
          throw rs.signin;
        }
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
    //console.log(req.body);
    // if (bcrypt.compareSync(req.body.userpassword, user.userpassword)) {
    //   console.log("same");
    // } else {
    //   console.log("not same");
    // }
  }
};

module.exports.service = service;
