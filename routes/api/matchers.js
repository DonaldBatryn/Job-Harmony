const express = require('express');
const router = express.Router();
const OnePage = require("../../models/OnePage")
const passport = require("passport");
const Preference = require("../../models/Preference")



router.get("/",
    // so we have the id of the jobseeker that looking for onepages 
    passport.authenticate("jwt", {
        session: false
    }),

    (req, res) => {
        // the jobseekers id 
        const userId = req.user.id
        // const Id = req.params.aa

        // console.log(userId)
        // console.log(Id)

        Preference.findOne({userId}).then(preference => {
            // console.log(preference)
            console.log("sgrtfhgdrthges")
            OnePage.find({
                    jobField: preference.jobField,
                    // jobField: preference.proximity,
                    // rfq add when google api
                    type: preference.type,
                    startingPay: { $gte: preference.salaryRangeLow, $lte: preference.salaryRangeHigh  }
                    // startingPay: { $gte: 0, $lte: 1000000 }

                
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