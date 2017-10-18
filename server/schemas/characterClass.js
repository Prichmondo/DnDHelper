var mongoose = require('mongoose');
var abilitiesBonus = require('./abilitiesBonus');
var speed = require('./speed');
var savingThrowsProgress = require('./savingThrowsProgress');
var commons = require('./commons');
var bonus = require('./bonus');
var special = require('./special');

var characterClassSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    levels: {
        type: Number,
        required: true
    },    
    baseAttackBonus: {
        type: String,
        enum: commons.attackBonusType,
        required: true
    },
    savingThrows: {
        type: savingThrowsProgress,
        required: true
    },
    type: {
        type: String,
        enum: commons.classType,
        required: true
    },
    hitDice:{
        type: Number,
        required: true
    },
    skills:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
    }],
    specials: {
        type: [{
            specials:{
                type: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Special',
                }]
            }
        }]
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var CharacterClass = module.exports = mongoose.model("CharacterClass", characterClassSchema);