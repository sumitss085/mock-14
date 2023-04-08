const express =require("express");
const Userrouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usermodel = require("../Model/User.Model");
require("dotenv").config();

Userrouter.post("/register", async (req, res) => {
  const { name, gender, dob, email, mobile, initialBalnce, adharNo, panNo } =
    req.body;

  try {
    const user = new Usermodel({
      Name: name,
      Gender: gender,
      DOB: dob,
      Email: email,
      Mobile: mobile,
      initialBalnce: initialBalnce,
      AdharNo: adharNo,
      PanNo: panNo,
    });
      await user.save();
      res.send({ msg: "user register succesfully" });
  } catch (error) {
   res.send({ msg: "something went wrong" });
  }
});

// Userrouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await Usermodel.find({ email });

//     if (user.length > 0) {
//       bcrypt.compare(password, user[0].password, (err, result) => {
//         if (result) {
//           const token = jwt.sign({ _id: user[0]._id }, "masai");
//           res.send({ msg: "login succesfully", token: token, email: email,password:password });
//         } else {
//           res.send({ msg: "wrong crenditial" });
//         }
//       });
//     } else {
//       res.send({ msg: "wrong crenditial" });
//     }
//   } catch (error) {
//     res.send({ msg: "wrong crenditial" });
//   }
// });



module.exports = Userrouter