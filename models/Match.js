const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatchSchema = new Schema({
  employerId: {
    type: String,
    required: true
  },
  resumeId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Match = mongoose.model('matches', MatchSchema);