const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const passport = require("passport");
const Resume = require("../../models/Resume")



router.get("/:userId",
    // so we have the id of the jobseeker that looking for onepages 
    passport.authenticate("jwt", {
        session: false
    }),
    // async (req, res) => {
    (req, res) => {
        // the jobseekers id 
        const userId = req.params.userId
        const Id = req.params.aa
        // console.log(onePageId);
        // console.log(userId);
        console.log(userId)
        console.log(Id)

        Resume.find({userId: userId}).then(resume => {
            console.log(resume)
            // console.log(2222211111111111111111111111222222222111111111111111111111)
            // console.log(resume.jobField)
            // console.log(resume.jobTitle)
            OnePage.find({
                    jobField: resume.jobField,
                    jobTitle: resume.jobTitle 
                }).then(onePages => {
                    
                // console.log(onePages)
                    res.json(onePages)
                }).catch(err => {
                console.log("what the fuck!!!!!!!")
                    res.status(404).json(err)
                });
            }).catch(err => {

                res.status(404).json(err)
            });

});


module.exports = router;