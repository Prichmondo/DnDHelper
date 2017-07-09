var mongoose = require('mongoose');
var commons = require('./commons');

var savingThrowsBonus = {
    fortitude: commons.savingThrowsBonusType,
    reflex: commons.savingThrowsBonusType,
    will: commons.savingThrowsBonusType,
};

module.exports = savingThrowsBonus;