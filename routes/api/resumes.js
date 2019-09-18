const express = require('express');
const router = express.Router();
const Resume = require('../../models/Resume');

//validations

router.post('/new', (req, res) => {
  const user_id = req.body.user_id;
  const job_history = req.body.job_history;
  const job_field = req.body.job_field;
  const job_skills = req.body.job_skills;

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

router.get("/user/:user_id", (req,res) => {
  Resume.find({user: req.params.user_id})
  .then(resume => res.json(resume))
  .catch(err => 
    res.status(404).json({noResumeFound: "No resume found from that User"})
  );
});

module.exports = router;