var mongoose = require('mongoose');
var CharacterClass = require('../schemas/characterClass');

var characterClasses = {

    get: function(callback, limit){
        CharacterClass
            .find(callback)
            .limit(limit)
            .populate("classLevels.specials");
    },

    getById: function(id, callback){
        CharacterClass
            .findById(id, callback)
            .populate("classLevels.specials");
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
        CharacterClass.findOneAndUpdate({ _id: id }, characterClass, options, callback);
    }

}

module.exports = characterClasses;