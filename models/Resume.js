const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  job_history: {
    type: String,
    required: true
  },
  job_field: {
    type: String,
    required: true
  },
  job_skills: {
    type: String,
    required: true
  }
});

module.exports = Resume = mongoose.model('resumes', ResumeSchema);

