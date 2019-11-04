const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const Like = require("../../models/Like")
const OnePage = require("../../models/OnePage")
const passport = require("passport");
const Resume = require("../../models/Resume")


router.post("/:onePageId",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {

        const onePageId = req.params.onePageId
        const userId = req.user.id

        OnePage.findById(onePageId).then((onepage) =>{
            Resume.findOne({userId: userId}).then((resume) => {
                onepage.resumes.push(resume)
                onepage.save()
                const a = onepage.userId
                // rfq Come back after reseed this is braking becuse the onepage.userId is null 
                // reseeding mightnot fix anything but going to finish onepage stuff before messing with seeds and user
                // User.findById(a).then((employer) => {
                    // const employerEmail = employer.email
                    // res.json(employerEmail)
                    User.findById(req.user.id).then(user => {
                        console.log(user.pendingOnePages)
                        user.pendingOnePages.push(req.params.onePageId)
                        user.save()
                        console.log(11111111111111111111111111111)
                        console.log(user.pendingOnePages)
                        const payload = {
                            // employerId: "WHERE DO I END UP?",
                            onePageId: onepage._id,
                            onePage: onepage
                            
                        }
                        res.json(payload)

                    })
                    .catch(err => {
                        res.status(404).json(err)
                    })
            }).catch(err => {
                res.status(404).json(err)
            });
        }).catch(err => {
            res.status(404).json(err)
        });

});

router.get("/:OnepageId", (req, res) => {
   // id of the one page that is being used to send back an array of  
   // job seeker
   const OnepageId = req.params.OnepageId

        OnePage.findById(OnepageId)
            .select("resumes")
            .populate('resumes', "benefits startingPay")
            .exec()
            .then((onepage) => {
                res.json(onepage)
            }).catch(err =>
                res.status(404).json({
                    noResumeFound: "No resume found from that User"
                })
            );
});

module.exports = router;



