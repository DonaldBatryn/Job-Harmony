const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OnePageSchema = new Schema({
  user_id: {
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
  // job type parttime, fulltime, freelance
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
  },
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resumes'}]

});

module.exports = OnePage = mongoose.model('onePages', OnePageSchema);
