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


/*
{
  "user_id": "5d83ade24f458a13abe6d572",

  "job_history": "jh1",

  "job_field": "jf1",

  "job_skills": "js1"

}


*/

