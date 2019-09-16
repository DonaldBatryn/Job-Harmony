const Validator = require('validator');
const validText = require('./valid-text');




module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (Validator.isEmpty(data.zip_code)) {
        errors.password = 'zip_code field is required';
    }

    if (Validator.isEmpty(data.f_name)) {
        errors.password = 'first name field is required';
    }

    if (Validator.isEmpty(data.l_name)) {
        errors.password = 'Last name name field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
