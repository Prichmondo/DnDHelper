var mongoose = require('mongoose');

var characterSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    campain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campain'
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