const express = require('express');
const router = express.Router();
const Preference = require("../../models/Preference")
const User = require('../../models/User');
const validatesPreferenceInput = require('../../validations/preference_input');
const passport = require('passport');



router.post('/new',
    passport.authenticate('jwt', {
        session: false
    }), (req, res) => {

        User.findById(req.user.id).then(user => {
            console.log(user)
            if (user.preference.length > 0 ) {
                let preferenceErrors = "preference already exists";
                return res.status(400).json(preferenceErrors);
            } else {
                let {
                    errors,
                    isValid
                } = validatesPreferenceInput(req.body)

        //         if (!isValid) {
        // console.log("TESTING TESTING");
        // console.log("TESTING TESTING");
        // console.log("TESTING TESTING");
        // let {
        //     errors,
        //     isValid
        // } = validatesPreferenceInput(req.body)

        //             return res.status(400).json(errors)
        //         }
                const userId = req.user.id;
                const jobField = req.body.jobField;
                const proximity = req.body.proximity;
                const type = req.body.type;
                const salaryRange = req.body.salaryRange.split("-")
                const salaryRangeHigh = salaryRange[1];
                const salaryRangeLow = salaryRange[0];
                // Preference.findOne

                const newPreference = new Preference({
                    userId,
                    jobField,
                    proximity,
                    type,
                    salaryRangeHigh,
                    salaryRangeLow

                });
                newPreference.save().then(preference => {

                    User.findById(userId).then((user) => {
                        user.preference.push(preference)
                        // console.log(user)
                        user.save()
                        res.json(user)
                    }).catch(err => {
                        res.status(404).json(err)
                    });
                }).catch(err => {
                    console.log(err)
                    res.status(404).json(err)

                });
        
            }
        
        }).catch(err => {
    console.log(err)
    res.status(404).json(err)

});
})


router.patch('/:id',

    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        Preference.findById(req.params.id).then(preference => {
            console.log(preference)
            const salaryRange = req.body.salaryRange.split("-")
            const salaryRangeHigh = salaryRange[1];
            const salaryRangeLow = salaryRange[0];
            preference.jobField = req.body.jobField;
            preference.proximity = req.body.proximity;
            preference.type = req.body.type;
            preference.salaryRangeHigh = salaryRangeHigh;
            preference.salaryRangeLow = salaryRangeLow;
            preference.save().then(preference => res.json(preference));
        })
        .catch(err =>

            res.status(404).json({
                nopreferencefound: 'No preference found with that ID',
                err
            })
        );
    })
module.exports = router;