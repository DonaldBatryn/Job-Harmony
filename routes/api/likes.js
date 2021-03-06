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
        console.log()
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
                        user.pendingOnePages.push(req.params.onePageId)
                        user.save()
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
    console.log(OnepageId)
    console.log(111111111111111111111111)
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


router.patch("/all",
    passport.authenticate("jwt", {
        session: false
    }), (req, res) => {
        // id of the one page that is being used to send back an array of  
        // job seeker

        User.findById(req.user.id)
            .populate('pendingOnePages')
            .exec()
            .then((user) => {
                console.log(user.pendingOnePages)
                res.json(user.pendingOnePages)
            }).catch(err =>
                res.status(404).json({
                    nopendingOnePagesFound: "No pendingOnePages found from that User"
                })
            );
    });

module.exports = router;



