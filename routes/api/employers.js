const express = require('express');
const router = express.Router();
const Employer = require("../../models/Employer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

router.get("/employers", (req, res) => res.json({msg: "this is the employers route"}));

router.post("/login", (req, res) => {
  const email = req.body.email;
  const apssword = req.body.password;

  Employer.findOne({email})
  .then(employer => {
    if (!employer) {
      return res.status(404).json({email: 'This user does not exist'})
    }
    bcrypt.compare(password, employer.password)
    .then(isMatch => {
      if (isMatch) {
        res.json({msg: 'Success'});
      } else {
        return res.status(400).json({password: 'Incorrect Password'})
      }
    })
  })
})
module.exports = router;