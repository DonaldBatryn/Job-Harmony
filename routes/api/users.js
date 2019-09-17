const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const keys = require('../../config/keys');
const passport = require('passport');


router.get("/users", (req, res) => res.json({
  msg: "this is the users route"
}));

const validateLoginInput = require('../../validations/login_input')

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'This user does not exist'
        })
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email
            };
            jwt.sign(payload, keys.secretOrKey, {
              expiresIn: 3600
            }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            });

          } else {
            // errors.password = "Incorrect Password"
            return res.status(400).json({
              password: 'Incorrect Password'
            })
          }
        })
    })
})

router.post("/register", (req, res) => {

  const {
    errors,
    isValid
  } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = {
                id: user.id,
                email: user.email
              };

              jwt.sign(payload, keys.secretOrKey, {
                expiresIn: 3600
              }, (err, token) => {
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