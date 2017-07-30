var mongoose = require('mongoose');
var campaignMilestone = require('./campaignMilestone');

var campaignSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    setting: String,
    createDate: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    milestones: {
        type: [campaignMilestone]
    }
});

var Campaign = module.exports = mongoose.model("Campaign", campaignSchema);

module.exports.get = function(callback, limit){
    Campaign.find(callback).limit(limit);
}