const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  job_history: {
    type: String,
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
  jobTitle: {
    type: String,
    required: true
  }
});

module.exports = Resume = mongoose.model('resumes', ResumeSchema);

