const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const passport = require("passport");
const Resume = require("../../models/Resume")



router.get("/",
    // so we have the id of the jobseeker that looking for onepages 
    passport.authenticate("jwt", {
        session: false
    }),
    // async (req, res) => {
    (req, res) => {
        // the jobseekers id 
        const userId = req.user.id
        // console.log(onePageId);
        // console.log(userId);

        Resume.findOne({userId}).then((resume) => {
            console.log(resume.jobField)
            console.log(resume.jobTitle)
            OnePage.find({
                    jobField: resume.jobField,
                    jobTitle: resume.jobTitle 
                }).then((onePages) => {
                console.log(onePages)
                    res.json(employerEmail)
                }).catch(err => {
                    res.status(404).json(err)
                });
            }).catch(err => {
                res.status(404).json(err)
            });

});


module.exports = router;