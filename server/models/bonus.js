var mongoose = require('mongoose');

var abilities = require('./abilities');
var savingThrowsBonus = require('./savingThrowsBonus');
var speed = require('./speed');
var commons = require('./commons');

var bonus = {
    abilities:    { type: commons.bonusType, bonus: abilities },
    savingThrows: { type: commons.bonusType, bonus: savingThrowsBonus, category: commons.attackType },
    speed:        { type: commons.bonusType, bonus: speed },
    ac:           { type: commons.bonusType, bonus: Number },
    optionalFeat: { type: commons.bonusType, bonus: commons.featType },
    feat:         { type: commons.bonusType, bonus: commons.featType }
};

module.exports = bonus;