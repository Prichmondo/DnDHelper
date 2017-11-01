var mongoose = require('mongoose');
var abilitiesBonus = require('./abilitiesBonus');
var speed = require('./speed');
var commons = require('./commons');
var bonus = require('./bonus');
var special = require('./special');

var raceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: commons.raceType,
        required: true
    },
    size: {
        type: String,
        enum: commons.size,
        required: true
    },
    speeds: {
        type: [speed]
    },
    abilitiesModifiers: { 
        type: abilitiesBonus,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    specials:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Special',
        }]
    }
});

var Race = module.exports = mongoose.model("Race", raceSchema);