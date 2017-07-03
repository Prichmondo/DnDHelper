var mongoose = require('mongoose');

var characterSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campain'
    },
    race: {
        type: String
    },
    classes:{
        type: Array
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Character = module.exports = mongoose.model("Character", characterSchema);