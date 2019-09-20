const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
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
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    required: true
  },
  resume: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resumes'}]
  

});
module.exports = User = mongoose.model('users', UserSchema);