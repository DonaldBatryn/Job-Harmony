const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesOnePageInput(data) {
  let errors = {};
  data.jobField = validText(data.jobField) ? data.jobField : '';
  data.jobSkills = validText(data.jobSkills) ? data.jobSkills : '';
  data.companyName = validText(data.companyName) ? data.companyName : '';
  data.jobTitle = validText(data.jobTitle) ? data.jobTitle : '';
  data.description = validText(data.description) ? data.description : '';
  data.type = validText(data.type) ? data.type : '';
  data.remote = validText(data.remote) ? data.remote : '';
  data.benefits = validText(data.benefits) ? data.benefits : '';
  data.startingPay = validText(data.startingPay) ? data.startingPay : '';

  if (Validator.isEmpty(data.jobField)) {

    errors.jobField = "jobField name is required";
  }
  if (Validator.isEmpty(data.jobSkills)) {

    errors.jobSkills = "jobSkills is required";
  }
  if (Validator.isEmpty(data.companyName)) {

    errors.companyName = "Job companyName is required";
  }
  if (Validator.isEmpty(data.jobTitle)) {

    errors.jobTitle = "Job jobTitle is required";
  }
  if (Validator.isEmpty(data.description)) {

    errors.description = "Job description is required";
  }
  if (Validator.isEmpty(data.type)) {

    errors.type = "Job must be full-time, part-time or freelance";
  }
  if (Validator.isEmpty(data.remote)) {

    errors.remote = "Job remote  is required";
  }
  if (Validator.isEmpty(data.benefits)) {

    errors.benefits = "Job benefits is required";
  }
  if (Validator.isEmpty(data.startingPay)) {

    errors.startingPay = "Job startingPay is required";
  }
  return {
    errors,
    isValid: Object.keys(errors.length === 0)
  }
}