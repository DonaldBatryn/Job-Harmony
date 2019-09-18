const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesResumeInput(data) {
  let errors = {};
  data.user_id = validText(data.user_id) ? data.user_id : '';
  data.job_history = validText(data.job_history) ? data.job_history : '';
  data.job_field =  validText(data.job_field) ? data.job_field : '';
  data.job_skills = validText(data.job_skills) ? data.job_skills : '';

  if (Validator.isEmpty(data.job_history)) {
    errors.job_history = "Job History is required";
  }
  if (Validator.isEmpty(data.job_field)) {
    errors.job_field = "Job Field is required";
  }
  if (Validator.isEmpty(data.job_skills)) {
    errors.job_skills = "Job Skills is required";
  }
  return {
    errors,
    isValid: Object.keys(errors.length === 0)
  }
}