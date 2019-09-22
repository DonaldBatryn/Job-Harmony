const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};
    // console.log(data)
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        // console.log(data.email)
        // console.log(168541694816186)
        errors.email = 'Email field is required';
    }
    
    if (Validator.isEmpty(data.password)) {
        // console.log(data.password)
        // console.log(168541694816186)
        errors.password = 'Password field is required';
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
