var mongoose = require('mongoose');

var raceTypes = ["Humanoid", "Animal", "Undead", "Outsider"]

var size = ["tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"]

var abilities = mongoose.Schema({
    strenght: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
})

var raceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: raceTypes,
        required: true
    },
    size: {
        type: String,
        enum: size,
        require: true
    },
    abilitiesModifiers: { 
        type: abilities
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Race = module.exports = mongoose.model("Race", raceSchema);