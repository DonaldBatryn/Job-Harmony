const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.f_name = validText(data.f_name) ? data.f_name : '';
    data.l_name = validText(data.l_name) ? data.l_name : '';
    data.zip_code = validText(data.zip_code) ? data.zip_code : '';
    data.role = validText(data.role) ? data.role : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (data.password.length < 6){
        errors.password = 'Password must be at least 6 characters'
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please re-enter password';
    }

    if (data.password2 !== data.password) {
        errors.password2 = 'Passwords must match';
    }

    if (Validator.isEmpty(data.zip_code)) {
        errors.zip_code = 'zip_code field is required';
    }

    if (data.zip_code.length !== 5) {
        errors.zip_code = 'Please enter a valid zipcode';
    }

    if (Validator.isEmpty(data.f_name)) {
        errors.f_name = 'first name field is required';
    }

    if (Validator.isEmpty(data.l_name)) {
        errors.l_name = 'Last name name field is required';
    }

    if (data.role === "Please select a role"){
        errors.role = 'Please select a role';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
