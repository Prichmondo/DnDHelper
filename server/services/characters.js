const mongoose = require('mongoose');
const Character = require('../schemas/character');
const Campaign = require('../schemas/campaign');
const characterModel = require("../models/character")

var characters = {

    get: function(callback, limit){
        Character
            .find((req, characters)=>{
                var response = characters.map((character, index)=>{
                    return characterModel.map(character);
                });
                callback(req, response);
            })
            .limit(limit)
            .populate("Campaign")
            .populate("skills.skill")
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