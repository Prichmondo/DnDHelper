var mongoose = require('mongoose');

var campaignMilestoneSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    campaignDate: {
        type: Date,
        default: Date.now
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = campaignMilestoneSchema;