const express = require('express');
const router = express.Router();
const Resume = require("../../models/Resume");
const validatesResumeInput = require('../../validations/resume_input');
//validations

router.post('/new', (req, res) => {

  const {errors, isValid } = validatesResumeInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const user_id = req.body.user_id;
  const job_history = req.body.job_history;
  const job_field = req.body.job_field;
  const job_skills = req.body.job_skills;
  // const resume = Resume.findOne({
  //   user_id: req.body.id
  // })
  // if (resume) {
  //   errors.resume = "User already has a resume"
  //   return res.status(400).json(errors)
  // }

  //check isValid

  const newResume = new Resume({
    user_id, 
    job_history,
    job_field,
    job_skills,
  });
  newResume.save()
    .then(resume => res.json(resume))
    .catch(err => res.json(err));
})

// router.get("/user/:user_id", (req,res) => {
//   Resume.find({user: req.params.user_id})
//   .then(resume => res.json(resume))
//   .catch(err => 
//     res.status(404).json({noResumeFound: "No resume found from that User"})
//   );
// });

module.exports = router;
// app.get('/users/:userId/resumes/:resumeId', function (req,res) {
//   res.send(req.params)
// })
// 1) /users/3/resume
// 2) /resumes/45