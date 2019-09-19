const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const passport = require("passport");
const Resume = require("../../models/Resume");

router.post("/:resume_id/matches", (req, res) => {
    passport.authenticate("jwt", {session: false})
    resume_id = req.params.resume_id 
    userId = req.user.id
    const newMatch = new Match({employerId:user_id, resume_id: resume_id})
    const employee = User.findById(resume.userId)
    const employeeEmail = employee.email
    const resume = Resume.findById(resume_id)
    newMatch.save()
        .then(match => {
            const payload = {
                employeeEmail
            };
            res.json({
                success: true,
                payload
        })
      })
    })

    

router.get("/:user_id/matches", (req, res) => {
    const resume_id = req.params.user_id
    Match.find({
        resumeId: resume_id
    })
    .then(
      resume => {
        res.json(resume.employer_id)
      } 
    )
    .catch(res.status(400).json({message: "No matches found for that resume."}))

    // if (resumeMatches.length){
    //     res.status(404).json({noMatchesFound: "No matches found for that resume"})
    // }
    // then(resume => )
})
 


module.exports = router;