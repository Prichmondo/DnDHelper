var mongoose = require('mongoose');
var pgSkill = require('./pgSkill') 

var characterSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campain'
    },
    race: {
        type: String
    },
    classes:{
        type: Array
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    skills: {
        type: [pgSkill]
    }
});

module.exports = mongoose.model("Character", characterSchema);