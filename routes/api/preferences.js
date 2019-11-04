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
            if (user.preference.length > 0 ) {
                Preference.findById(user.preference).then(preference => {
                    const salaryRange = req.body.salaryRange.split("-")
                    const salaryRangeHigh = salaryRange[1];
                    const salaryRangeLow = salaryRange[0];
                    preference.jobField = req.body.jobField;
                    preference.proximity = req.body.proximity;
                    preference.remote = req.body.remote;
                    preference.type = req.body.type;
                    preference.salaryRangeHigh = salaryRangeHigh;
                    preference.salaryRangeLow = salaryRangeLow;
                    preference.save().then(preference => res.json(preference));
                })
            } else {
                let {
                    errors,
                    isValid
                } = validatesPreferenceInput(req.body)
                const userId = req.user.id;
                const jobField = req.body.jobField;
                const proximity = req.body.proximity;
                const type = req.body.type;
                const salaryRange = req.body.salaryRange.split("-")
                const salaryRangeHigh = salaryRange[1];
                const salaryRangeLow = salaryRange[0];
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
            const salaryRange = req.body.salaryRange.split("-")
            const salaryRangeHigh = salaryRange[1];
            const salaryRangeLow = salaryRange[0];
            // const salaryRangeHigh = req.body.salaryRangeHigh;
            // const salaryRangeLow = req.body.salaryRangeLow;
            preference.jobField = req.body.jobField;
            preference.proximity = req.body.proximity;
            preference.type = req.body.type;
            preference.remote = req.body.remote;
            preference.salaryRangeHigh = salaryRangeHigh;
            preference.salaryRangeLow = salaryRangeLow;
            preference.save()
            res.json(preference);
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({
                nopreferencefound: 'No preference found with that ID',
                err
            })
        }


        );
    })
router.get('/:id',


    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
       
        User.findById(req.params.id).then(user => {
            Preference.findById(user.preference[0]).then(preference => {
            res.json(preference);
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({
                    nopreferencefound: 'No preference found ',
                    err
                })
            }


            );
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({
                nopreferencefound: 'No User found ',
                err
            })
        }


        );
    })
module.exports = router;