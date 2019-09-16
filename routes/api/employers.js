const express = require('express');
const router = express.Router();
const Employer = require("../../models/Employer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const keys = require('../../config/keys');
const passport = require('passport');
router.get("/employers", (req, res) => res.json({msg: "this is the employers route"}));

const validateLoginInput = require('../../validations/login_input')







router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Employer.findOne({email})
  .then(employer => {
    if (!employer) {
      return res.status(404).json({email: 'This user does not exist'})
    }
    bcrypt.compare(password, employer.password)
    .then(isMatch => {
      if (isMatch) {
      const payload = { id: employer.id, email: employer.email};
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 } , (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      });
      
      } else {
        // errors.password = "Incorrect Password"
        return res.status(400).json({password: 'Incorrect Password'})
      }
    })
  })
})

router.post("/signup", (req,res) => {
  
  const {errors, isValid} = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Employer.findOne({email: req.body.email}).then(employer => {
    if (employer) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newEmployer = new Employer({
        email: req.body.email,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newEmployer.password, salt, (err, hash) => {
          if (err) throw err;
          newEmployer.password = hash;
          newEmployer
          .save()
          .then(employer => {
            const payload = {id: employer.id, email: employer.email};

            jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            });
          })
          .catch(err => console.log(err))
        })
      })
    }
  })
})
module.exports = router;