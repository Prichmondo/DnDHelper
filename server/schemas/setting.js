var mongoose = require('mongoose');
var Satellite = require('./satellite');

var settingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    months: {
        type: [String]
    },
    days: {
        type: [String]
    },
    satellites: {
        type: [Satellite]
    }
});

var Race = module.exports = mongoose.model("Setting", settingSchema);