const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  f_name: {
    type: String,
    required: true
  },
  l_name: {
    type: String,
    required: true
  },
  zip_code: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Employer = mongoose.model('employers', EmployerSchema);