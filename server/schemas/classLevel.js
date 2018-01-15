var mongoose = require('mongoose');

var classLevelSchema = mongoose.Schema({
    specials: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Special',
        }]
    }
});

module.exports = classLevelSchema;