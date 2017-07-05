var mongoose = require('mongoose');
var Race = require('../models/race');

var races = {

    get: function(callback, limit){
        Race
            .find(callback)
            .limit(limit)
            .populate("race");
    },

    getById: function(id, callback){
        Race
            .findById(id, callback)
            .populate("race");
    },

    add: function(race, callback){
        Race.create(race, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Race.remove(query, callback);
    },

    update: function(id, race, options, callback){
        Race.findOneAndUpdate(id, race, options, callback);
    }

}

module.exports = races;