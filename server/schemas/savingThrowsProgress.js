var mongoose = require('mongoose');
var commons = require('./commons');

var savingThrowsBonus = mongoose.Schema({
    fortitude: {
        type: String,
        required: true,
        enum: commons.savingThrowsBonusType
    },
    reflex: {
        type: String,
        required: true,
        enum: commons.savingThrowsBonusType
    },
    will: {
        type: String,
        required: true,
        enum: commons.savingThrowsBonusType
    },
}, { _id: false });

module.exports = savingThrowsBonus;