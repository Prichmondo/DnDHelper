var mongoose = require('mongoose');
var commons = require('./commons');

var specialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

var Special = module.exports = mongoose.model("Special", specialSchema);