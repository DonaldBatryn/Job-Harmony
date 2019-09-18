const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const jwtPayload = ExtractJWT.fromAuthHeaderAsBearerToken();
const passport = require("passport");
const Resume = require("../../models/resume");

router.post("/matches/:resume_id", (req, res) => {
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

    

router.get("/matches/:resume_id", (req, res) => {
    const resume_id = req.params.resume_id
    const resumeMatches = Match.find({
        resumeId: resume_id
    })
    if (resumeMatches.length){
        res.status(404).json({noMatchesFound: "No matches found for that resume"})
    }
    const userRes = resumeMatches.each |match|
        const employerId = match.employerId
})
 


module.exports = router;