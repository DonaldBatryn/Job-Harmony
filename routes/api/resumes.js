const express = require('express');
const router = express.Router();
const Resume = require('../../models/Resume');
const User = require('../../models/User');
const validatesResumeInput = require('../../validations/resume_input')
const passport = require('passport')



router.post('/new',
    passport.authenticate('jwt', {
      session: false
    }), (req, res) => {

  let { errors, isValid } = validatesResumeInput(req.body)

  if (!isValid) {

    return res.status(400).json(errors)
  }
  const userId = req.user.id;
  const job_history = req.body.job_history;
  const jobField = req.body.jobField;
  const jobSkills = req.body.jobSkills;
  const jobTitle = req.body.jobTitle;

  
  
  const newResume = new Resume({
    userId,
    job_history,
    jobField,
    jobSkills,
    jobTitle
  });
  newResume.save().then(resume => {
    debugger
    User.findById(userId).then((user) => {
      user.resume.push(resume)
      user.save()
      res.json(resume)
        }).catch(err => {
          res.status(404).json(err)
        });
  }).catch(err => {
    console.log(err)
    res.status(404).json(err)

  });
})







router.get('/:id', (req, res) => {
  Resume.findById(req.params.id)
.then(resume => res.json(resume))
    .catch(err =>
      res.status(404).json({
        noResumeFound: "No resume found from that User"
      })
    );
});

router.patch('/:id/edit',

  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Resume.findById(req.params.id)
      .then(resume => {
        const { errors, isValid } = validatesResumeInput(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }
        resume.job_history = req.body.job_history
        resume.job_field = req.body.job_field
        resume.job_skills = req.body.job_skills
        resume.save().then(resume => res.json(resume));
      })
      .catch(err =>

        res.status(404).json({ noresumefound: 'No resume found with that ID' })
      );
  })
module.exports = router;