var mongoose = require('mongoose');

var campainSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    setting: String,
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Campain = module.exports = mongoose.model("Campain", campainSchema);

module.exports.get = function(callback, limit){
    Campain.find(callback).limit(limit);
}