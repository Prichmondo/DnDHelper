var mongoose = require('mongoose');

var abilities = require('./abilities');
var savingThrowsBonus = require('./savingThrowsBonus');
var speed = require('./speed');
var bonus = require('./bonus');
var commons = require('./commons');

var special = {

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    bonus: bonus
};

module.exports = special;