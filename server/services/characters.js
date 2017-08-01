var mongoose = require('mongoose');
var Character = require('../models/character');
var Campaign = require('../models/campaign');

var characters = {

    get: function(callback, limit){
        Character
            .find(callback)
            .limit(limit)
            .populate("Campaign");
    },

    getById: function(id, callback){
        Character
            .findById(id, callback)
            .populate("Campaign");
    },

    add: function(character, callback){
        Character.create(character, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Character.remove(query, callback);
    },

    update: function(id, character, options, callback){
        Character.findByIdAndUpdate(id, character, options, callback);
    }

}

module.exports = characters;