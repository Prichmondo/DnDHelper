var mongoose = require('mongoose');
var abilities = require('./abilities');
var speed = require('./speed');
var savingThrowsProgress = require('./savingThrowsProgress');
var commons = require('./commons');
var bonus = require('./bonus');
var special = require('./special');

var characterClassSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    levels: {
        type: Number,
        required: true
    },    
    baseAttackBonus: {
        type: commons.attackBonusType,
        required: true
    },
    savingThrows: {
        type: savingThrowsProgress,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: commons.classType
    },
    hitDice:{
        type: Number,
        required: true
    },
    skills:{
        type: Array
    },
    specials: {
        type: Array
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var CharacterClass = module.exports = mongoose.model("CharacterClass", characterClassSchema);