var mongoose = require('mongoose');
var commons = require('./commons');

var savingThrowsBonus = {
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
};

module.exports = savingThrowsBonus;