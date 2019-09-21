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
                User.findById(a).then((employer) => {
               
                    const payload = {
                        employerId: employer.id,
                        onePageId: onepage._id,
                        
                    }
                    res.json(payload)
                }).catch(err => {
                    res.status(404).json(err)
                });
            }).catch(err => {
                res.status(404).json(err)
            });
        }).catch(err => {
            res.status(404).json(err)
        });

});


router.delete("/:onePageId",
   
    passport.authenticate("jwt", {session: false}),
  
    (req, res) => {

     
        const onePageId = req.params.onePageId
        
    
        const userId = req.user.id

       

        OnePage.findById(onePageId).then((onepage) =>{
            Resume.findOne({userId: userId}).then((resume) => {
             
              
                onepage.resumes.unset(resume)
                onepage.save()
             
                    const employerEmail = employer.email
                    res.json(onepage)
            }).catch(err => {
                res.status(404).json(err)
            });
        }).catch(err => {
            res.status(404).json(err)
        });


});


router.get("/:onePage_id", (req, res) => {
   // id of the one page that is being used to send back an array of  
   // job seeker
   const onePage_id = req.params.onePage_id

        OnePage.findById(onePage_id)
            .select("resumes")
            .populate('resumes', "igg benefits starting_pay")
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