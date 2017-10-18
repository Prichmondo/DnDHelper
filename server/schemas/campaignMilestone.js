var mongoose = require('mongoose');

var campaignMilestoneSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign'
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

var CampaignMilestone = module.exports = mongoose.model("CampaignMilestone", campaignMilestoneSchema    );