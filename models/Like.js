const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LikeSchema = new Schema({
  employeeId: {
    type: Number,
    required: true
  },
  OnepageId: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Like = mongoose.model('likes', LikeSchema);