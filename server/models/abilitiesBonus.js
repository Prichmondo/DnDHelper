var mongoose = require('mongoose');

var abilitiesBonusSchema = mongoose.Schema({
    strenght: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
}, { _id: false });

module.exports = abilitiesBonusSchema;