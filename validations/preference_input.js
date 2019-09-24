const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatesPreferenceInput(data) {
    let errors = {};    
    const salaryRange = data.salaryRange.split("-")
    const salaryRangeHigh = salaryRange[1];
    const salaryRangeLow = salaryRange[0];
    // console.log(data)

    data.jobField = validText(data.jobField) ? data.jobField : '';
    data.proximity = validText(data.proximity) ? data.proximity : '';
    data.type = validText(data.type) ? data.type : '';
    data.salaryRangeHigh = validText(salaryRangeHigh.toString()) ? salaryRangeHigh.toString() : '';
    data.salaryRangeLow = validText(salaryRangeLow.toString()) ? salaryRangeLow.toString() : '';



    if (Validator.isEmpty(data.jobField)) {
        errors.jobField = "Job jobField is required";
    }

    if (Validator.isEmpty(data.proximity)) {
        errors.proximity = "Job proximity is required";
    }

    if (Validator.isEmpty(data.type)) {
        errors.type = "Job type is required";
    }
    if (Validator.isEmpty(data.salaryRangeHigh)) {
        errors.salaryRangeHigh = "Job salaryRangeHigh is required";
    }
    if (Validator.isEmpty(data.salaryRangeLow)) {
        errors.salaryRangeLow = "Job salaryRangeLow is required";
    }


    return {
        errors,
        isValid: Object.keys(errors.length === 0)
    }
}