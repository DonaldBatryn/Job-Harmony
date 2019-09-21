const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesResumeInput(data) {
  let errors = {};
  data.user_id = validText(data.user_id) ? data.user_id : '';
  data.job_history = validText(data.job_history) ? data.job_history : '';
  data.jobField =  validText(data.jobField) ? data.jobField : '';
  data.jobSkills = validText(data.jobSkills) ? data.jobSkills : '';
  data.jobTitle = validText(data.jobTitle) ? data.jobTitle : '';

  
  if (Validator.isEmpty(data.job_history)) {
    errors.job_history = "Job History is required";
  }
  
  if (Validator.isEmpty(data.jobField)) {
    errors.jobField = "Job Field is required";
  }
  
  if (Validator.isEmpty(data.jobSkills)) {
    errors.jobSkills = "Job Skills is required";
  }
  
  if (Validator.isEmpty(data.jobTitle)) {
    errors.jobTitle = "Job Title is required";
  }
  
  return {
    errors,
    isValid: Object.keys(errors.length === 0)
  }
}