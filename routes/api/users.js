const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const keys = require('../../config/keys');
const passport = require('passport');
const Resume = require('../../models/Resume');
const OnePage = require('../../models/OnePage');
const validateLoginInput = require('../../validations/login_input');
const validateSignupInput = require('../../validations/signup_input');


router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }
  User.findOne({
    email
  })  
    .populate('preference')
    .populate('resume')
    .populate('pendingOnePages')
    .exec()
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'This user does not exist'
        })
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            let preference;
            console.log(user)
            if (user.preference[0]._id === undefined) {
              preference = "no"
            }else{
              preference = user.preference[0]
            }

            const payload = {
              id: user.id,
              email: user.email,
              role: user.role,
              fName: user.fName,
              lName: user.lName,
              resume: user.resume,
              preference,
              pendingOnePages: user.pendingOnePages

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

 

  const { errors, isValid } = validateSignupInput(req.body);

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
        fName: req.body.fName,
        lName: req.body.lName,
        password: req.body.password,
        zipCode: req.body.zipCode,
        role: req.body.role
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              let preference = "no"
              const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
                fName: user.fName,
                lName: user.lName,
                preference
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
router.get("/all", (req, res) => {
  return User.find().then(users => res.json(users));
})
router.get("/:id", (req, res) => {
  return User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({
        noUserFound: 'No user found with that ID'
      })
    );
})

module.exports = router;