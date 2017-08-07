var mongoose = require('mongoose');

var campaignSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    setting: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    currentDate: {
        type: Date,
        default: Date.now
    },
    milestones: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CampaignMilestone'
        }]
    }
});

var Campaign = module.exports = mongoose.model("Campaign", campaignSchema);