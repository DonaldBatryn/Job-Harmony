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

    (req, res) => {
        // the jobseekers id 
        const userId = req.user.id
        // const Id = req.params.aa

        console.log(userId)
        // console.log(Id)

        Resume.findOne({userId: userId}).then(resume => {
            const aa = resume.jobField
            console.log(aa)
            console.log(resume)
            OnePage.find({
                    jobField: resume.jobField,
                
                }).then(onePages => {
                    
                // console.log(onePages)
                    res.json(onePages)
                }).catch(err => {
                    res.status(404).json(err)
                });
            }).catch(err => {

                res.status(404).json(err)
            });

});


module.exports = router;