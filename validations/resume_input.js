const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesResumeInput(data) {
  let errors = {};
  data.user_id = validText(data.user_id) ? data.user_id : '';
  data.jobHistory = validText(data.jobHistory) ? data.jobHistory : '';
  data.jobField =  validText(data.jobField) ? data.jobField : '';
  data.jobSkills = validText(data.jobSkills) ? data.jobSkills : '';
  data.jobTitle = validText(data.jobTitle) ? data.jobTitle : '';

  
  if (Validator.isEmpty(data.jobHistory)) {
    errors.jobHistory = "Job History is required";
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