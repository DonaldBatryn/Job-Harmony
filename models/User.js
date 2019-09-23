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
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  zipCode: {
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
  // image: {
  //   type: String,
  //   required: false
  // },
  resume: [{ type: mongoose.Schema.Types.ObjectId, ref: 'resumes'}]
  

});
module.exports = User = mongoose.model('users', UserSchema);
// {"email":"", "fName":"", "lName":"", "password":"", "zipCode":"", "role": ""}