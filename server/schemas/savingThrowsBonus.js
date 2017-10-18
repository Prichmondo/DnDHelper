var mongoose = require('mongoose');

var savingThrowsBonus = mongoose.Schema({
    fortitude: Number,
    reflex: Number,
    will: Number,
}, { _id: false });

module.exports = savingThrowsBonus;