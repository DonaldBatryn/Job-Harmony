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
        
        // console.log("made it")

      
        OnePage.findById(onePageId).then((onepage) =>{
            Resume.findOne({userId: userId}).then((resume) => {
                // console.log(resume)
                onepage.resumes.push(resume)
                onepage.save()
                // console.log(onepage)
                const a = onepage.userId
                // console.log(a)
                // rfq Come back after reseed this is braking becuse the onepage.userId is null 
                // reseeding mightnot fix anything but going to finish onepage stuff before messing with seeds and user
                // User.findById(a).then((employer) => {
                    // const employerEmail = employer.email
                    // res.json(employerEmail)
                    const payload = {
                        employerId: "WHERE DO I END UP?",
                        onePageId: onepage._id,
                        
                    }
                    res.json(payload)
                // }).catch(err => {
                //     res.status(404).json(err)
                // });
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
            console.log("take me out if the populate is working ok if it is not then replace the line above with the line below ")
            // .populate('resumes', "igg benefits startingPay")
            .exec()
            .then((onepage) => {
                console.log(onepage)
                res.json(onepage)
            }).catch(err =>
                res.status(404).json({
                    noResumeFound: "No resume found from that User"
                })
            );
});




module.exports = router;



