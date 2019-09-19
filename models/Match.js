const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatchSchema = new Schema({
  employer_id: {
    type: Number,
    required: true
  },
  resume_id: {
    type: Number,
    required: true
  }
});
module.exports = Match = mongoose.model('matches', MatchSchema);