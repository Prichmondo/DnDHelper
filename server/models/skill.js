var mongoose = require('mongoose');
var commons = require('./commons');

var skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    modifier: {
        type: String,
        enum: commons.abilities,
        required: true
    },
    trainedOnly: {
        type: Boolean,
        default: false
    },
    synergies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
    }]
});


var Skill = module.exports = mongoose.model("Skill", skillSchema);