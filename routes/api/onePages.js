const express = require('express');
const router = express.Router();
const OnePage = require('../../models/OnePage');
const validatesOnePageInput = require('../../validations/onePage_inputs');

//validations

router.post('/new', (req, res) => {
  const {errors, isValid } = validatesOnePageInput(req.body);
  const user_id = req.body.user_id;
  const company_name = req.body.company_name;
  const description = req.body.description;
  const type = req.body.type;
  const remote = req.body.remote;
  const benefits = req.bodybenefits;
  const starting_pay = req.body.starting_pay;
  //check isValid
  if (!isValid) {
    return res.status(400).json(errors)
  }

  
  const newOnePage = new OnePage({
    user_id,
    company_name,
    description,
    job_title,
    type,
    remote,
    benefits,
    starting_pay
  });
  newOnePage.save()
    .then(OnePage => res.json(OnePage))
    .catch(err => res.json(err));
})

router.get("/user/:user_id", (req, res) => {
  OnePage.find({
      user: req.params.user_id
    })
    .then(OnePage => res.json(OnePage))
    .catch(err =>
      res.status(404).json({
        noOnePageFound: "No One Page found from that User"
      })
    );
});

module.exports = router;