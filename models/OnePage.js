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
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  remote: {
    type: Boolean,
    required: true
  },
  benefits: {
    type: String,
    required: true
  },
  starting_pay: {
    type: Number,
    required: true
  },
  resumes: [{ type: mongoose.Schema.ObjectId, ref: 'Resume'}],

});

module.exports = OnePage = mongoose.model('onePages', OnePageSchema);
