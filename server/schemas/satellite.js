var mongoose = require('mongoose');

var satelliteSchema = mongoose.Schema({
    name: String,
    revolution: Number,
    color: String,
}, { _id: false });

module.exports = satelliteSchema;