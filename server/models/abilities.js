var mongoose = require('mongoose');

var abilitiesSchema = {
    strenght: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
};

module.exports = abilitiesSchema;