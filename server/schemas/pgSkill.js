var mongoose = require('mongoose');

var pgSkillSchema = mongoose.Schema({
    rank: {
        type: Number,
        required: true
    },
    skill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
    }
}, { _id: false });

module.exports = pgSkillSchema;