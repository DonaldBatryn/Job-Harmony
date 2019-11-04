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
        console.log(req)

        // the jobseekers id 
        const userId = req.user.id
        Preference.find({userId}).then(preference => {
            OnePage.find({
                    remote: preference[0].remote,
                    jobField: preference[0].jobField,
                    type: preference[0].type,
                    startingPay: { $gte: preference[0].salaryRangeLow, $lte: preference[0].salaryRangeHigh  }
                }).then(onePages => {
                    res.json(onePages)
                }).catch(err => {
                    res.status(404).json(err)
                });
            }).catch(err => {
                res.status(404).json(err)
            });
});

module.exports = router;