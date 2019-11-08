const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PreferenceSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    jobField: {
        type: String,
        required: true
    },
    proximity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    salaryRangeHigh: {
        type: Number,
        required: true
    },
    salaryRangeLow: {
        type: Number,
        required: true
    },
    remote: {
        type: Boolean
    }
});

module.exports = Preference = mongoose.model('preferences', PreferenceSchema);
