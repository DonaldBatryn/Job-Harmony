const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OnePageSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  job_title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // job type parttime 
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
  starting_pay: {
    type: Number,
    required: true
  },
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resumes'}]

});

module.exports = OnePage = mongoose.model('onePages', OnePageSchema);
