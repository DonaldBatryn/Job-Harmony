const express = require('express');
const router = express.Router();
const Preference = require('../../models/Preference');
const User = require('../../models/User');
const validatesPreferenceInput = require('../../validations/preference_input')
const passport = require('passport')



router.post('/new',
    passport.authenticate('jwt', {
        session: false
    }), (req, res) => {

        let {
            errors,
            isValid
        } = validatesPreferenceInput(req.body)

        if (!isValid) {

            return res.status(400).json(errors)
        }
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
                res.json(preference)
            }).catch(err => {
                res.status(404).json(err)
            });
        }).catch(err => {
            console.log(err)
            res.status(404).json(err)

        });
    })


router.patch('/',

    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        console.log(req.user.id)
        Preference.findOne({userId: req.user.id})
            .then(preference => {
                const {
                    errors,
                    isValid
                } = validatespreferenceInput(req.body);

                if (!isValid) {
                    return res.status(400).json(errors);
                }
                preference.jobField = req.body.jobField;
                preference.proximity = req.body.proximity;
                preference.type = req.body.type;
                preference.salaryRangeHigh = req.body.salaryRangeHigh;
                preference.salaryRangeLow = req.body.salaryRangeLow;
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