const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const passport = require("passport");
const Resume = require("../../models/Resume");
const Match = require("../../models/Match")

router.post("/:resumeId" ,passport.authenticate("jwt", {session: false}), (req, res) => {
    
    resume_id =   req.params.resumeId 
    userId =   req.user.id
    // resume_id =  parseInt (req.params.resumeId) 
    // userId =  parseInt (req.user.id)
    console.log("weeeeee made it ")
    console.log(typeof userId  )
    console.log(typeof resume_id  )

    const newMatch = new Match({employerId:userId, resumeId: resume_id})
    // const employee = User.findById(resume.userId)
    // const employeeEmail = employee.email
    // const resume = Resume.findById(resume_id)
    newMatch.save().then(match => {
            // const payload = {
            //     employeeEmail
            // };
            res.json({
                success: true,
                // payload
        })
      }).catch(err => {
        res.status(404).json(err)
      });


    })

    

router.get("/:resumeId", passport.authenticate("jwt", {
      session: false
    }), (req, res) => {

    const resumeId = req.params.resumeId
    Match.find({
        resumeId
    })
    .then(
      match => {
        res.json(match.employerId)
      } 
    )
    .catch(res.status(400).json({message: "No matches found for that resume."}))

    // if (resumeMatches.length){
    //     res.status(404).json({noMatchesFound: "No matches found for that resume"})
    // }
    // then(resume => )
})
 


module.exports = router;