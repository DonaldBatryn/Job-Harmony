const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const keys = require('../../config/keys');
const passport = require('passport');
const Resume = require('../../models/Resume');

// router.get("/users", (req, res) => res.json({
//   msg: "this is the users route"
// }));

const validateLoginInput = require('../../validations/login_input');
const validateSignupInput = require('../../validations/signup_input');

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid){
    return res.status(400).json(errors)
  }
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
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        password: req.body.password,
        zip_code: req.body.zip_code,
        role: req.body.role

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

router.get("/all", (req, res) => {
  return User.find().then(users => res.json(users));
})

router.get("/:id", (req, res) => {
  return User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ noUserFound: 'No user found with that ID' })
    );
})
router.get('/:id/resume', (req, res) => {
      Resume.find({
          user_id: req.params.id
        })
        .then(resume => res.json(resume))
        .catch(err =>
          res.status(404).json({
            noResumeFound: "No resume found from that User"
          })
        );
});
router.patch('/:id/resume/edit', (req, res) => {
  const resume = Resume.find({
    user_id: res.params.id
  });
      
    // if (req.body._id){
    //   delete req.body._id;
    // }
    resume.job_history = req.body.job_history;
    resume.job_field = req.body.job_field;
    resume.job_skills = req.body.job_skills;
    res.json({message: "Updated"});
      // .catch(err =>
      //   res.status(404).json({
      //     noResumeFound: "No resume found from that User"
      //   })
      // );
});
// router.get("/:id/resume")
// router.patch("/:id/resume/edit")

module.exports = router;