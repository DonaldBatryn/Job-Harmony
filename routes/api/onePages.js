const express = require('express');
const router = express.Router();
const OnePage = require('../../models/OnePage');
const validatesOnePageInput = require('../../validations/onePage_inputs')
const passport = require('passport')

router.get("/all", (req, res) => {
  return OnePage.find().then(onePages => res.json(onePages))
          .catch(err => res.status(404).json(err))
});

router.post('/new', (req, res) => {
  let { errors, isValid } = validatesOnePageInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }
  const user_id = req.body.user_id;
  const companyName = req.body.companyName;
  const description = req.body.description;
  const type = req.body.type;
  const remote = req.body.remote;
  const benefits = req.body.benefits;
  const startingPay = req.body.startingPay;
  const jobTitle = req.body.jobTitle;
  const jobField = req.body.jobField;
  const jobSkills = req.body.jobSkills;
  const newOnePage = new OnePage({
    user_id,
    companyName,
    description,
    jobTitle,
    jobField,
    jobSkills,
    type,
    remote,
    benefits,
    startingPay
  });
  newOnePage.save()
    .then(OnePage => res.json(OnePage))
    .catch(err => res.json(err));
})
router.get('/:id', (req, res) => {
  OnePage.findById(req.params.id)
    .then(onePage => res.json(onePage))
    .catch(err =>
      res.status(404).json({
        noOnePageFound: "No onePage found from that User"
      })
    );
});
router.patch('/:id/edit',

  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    OnePage.findById(req.params.id)
      .then(onePage => {
        const { errors, isValid } = validatesOnePageInput(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }
        onePage.companyName = req.body.companyName
        onePage.description = req.body.description
        onePage.jobTitle = req.body.jobTitle
        onePage.type = req.body.type
        onePage.remote = req.body.remote
        onePage.benefits = req.body.benefits
        onePage.startingPay = req.body.startingPay
        onePage.save().then(onePage => res.json(onePage));
      })
      .catch(err =>

        res.status(404).json({ noOnePageFound: 'No onePage found with that ID' })

      );
  })




module.exports = router;