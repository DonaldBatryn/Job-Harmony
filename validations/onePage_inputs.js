const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesOnePageInput(data) {
  let errors = {};
  data.user_id = validText(data.user_id) ? data.user_id : '';
  data.company_name = validText(data.company_name) ? data.company_name : '';
  data.description = validText(data.description) ? data.description : '';
  data.job_title = validText(data.job_title) ? data.job_title : '';
  data.type = validText(data.type) ? data.type : '';
  // data.remote = validText(data.remote) ? data.remote : '';
  data.benefits = validText(data.benefits) ? data.benefits : '';
  data.starting_pay = validText(data.starting_pay) ? data.starting_pay : '';

  if (Validator.isEmpty(data.company_name)) {
    errors.company_name = "Company name is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }
  if (Validator.isEmpty(data.type)) {
    errors.type = "Job type is required";
  }
  if (Validator.isEmpty(data.job_title)) {
    errors.job_title = "Job title is required";
  }
  // if (Validator.isEmpty(data.remote)) {
  //   errors.remote = "Job must be full-time, part-time or freelance";
  // }
  if (Validator.isEmpty(data.benefits)) {
    errors.benefits = "Job benefits is required";
  }
  if (Validator.isEmpty(data.starting_pay)) {
    errors.starting_pay = "Job starting pay is required";
  }
  return {
    errors,
    isValid: Object.keys(errors.length === 0)
  }
}