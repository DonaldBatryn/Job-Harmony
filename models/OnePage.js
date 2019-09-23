const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OnePageSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // job type part time, full time, freelance
  type: {
    type: String,
    required: true
  },
  remote: {
    type: Boolean,
    default: "false"
  },
  benefits: {
    type: String,
    required: true
  },
  startingPay: {
    type: Number,
    required: true
  },
  jobField: {
    type: String,
    required: true
  }, 
  jobSkills: {
    type: String,
    required: true
  }, // rfq takeout if no employer img
  image: {
    type: String,
    required: false
  },
  catchPhrase: {
    type: String,
    required: false
  },
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resumes'}]

});

module.exports = OnePage = mongoose.model('onePages', OnePageSchema);
