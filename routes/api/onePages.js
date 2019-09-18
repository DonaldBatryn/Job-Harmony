const express = require('express');
const router = express.Router();
const Resume = require('../../models/Resume');

//validations

router.post('/new', (req, res) => {
  const user_id = req.body.user_id;
  const company_name = req.body.company_name;
  const description = req.body.description;
  const type = req.body.type;
  const remote = req.body.remote;
  const benefits = req.bodybenefits;
  const starting_pay = req.body.starting_pay;
  //check isValid

  const newOnePage = new OnePage({
    user_id,
    company_name,
    description,
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