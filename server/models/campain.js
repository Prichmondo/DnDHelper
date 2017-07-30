var mongoose = require('mongoose');
var campainMilestone = require('./campainMilestone');

var campainSchema = mongoose.Schema({
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
        type: [campainMilestone]
    }
});

var Campain = module.exports = mongoose.model("Campain", campainSchema);

module.exports.get = function(callback, limit){
    Campain.find(callback).limit(limit);
}