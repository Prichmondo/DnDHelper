var mongoose = require('mongoose');
var CharacterClass = require('../schemas/characterClass');

var characterClasses = {

    get: function(callback, limit){
        CharacterClass
            .find(callback)
            .limit(limit)
            .populate("race");
    },

    getById: function(id, callback){
        CharacterClass
            .findById(id, callback)
            .populate("race");
    },

    add: function(characterClass, callback){
        CharacterClass.create(characterClass, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        CharacterClass.remove(query, callback);
    },

    update: function(id, characterClass, options, callback){
        if(characterClass._id) delete characterClass._id;
        CharacterClass.findOneAndUpdate(id, characterClass, options, callback);
    }

}

module.exports = characterClasses;