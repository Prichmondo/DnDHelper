var mongoose = require('mongoose');
var pgSkill = require('./pgSkill');
var abilitiesBonus = require('./abilitiesBonus');

var characterSchema = mongoose.Schema({
    name:       { type: String },
    race:       { type: String },
    classes:    { type: String },
    alignment:  { type: String },
    deity:      { type: String },
    size:       { type: String },
    age:        { type: Number },
    gender:     { type: String },
    height:     { type: Number },
    weight:     { type: Number },
    eyes:       { type: String },
    heir:       { type: String },
    skin:       { type: String },
    hitPoints:  { type: Number },
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campain'
    },
    abilities: {
        type: abilitiesBonus
    },    
    createDate: {
        type: Date,
        default: Date.now
    },
    skills: {
        type: [pgSkill]
    },
    player: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Character", characterSchema);