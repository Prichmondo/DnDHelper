var mongoose = require('mongoose');
var Race = require('../schemas/race');

var races = {

    get: function(callback, limit){
        Race
            .find(callback)
            .limit(limit)
    },

    getById: function(id, callback){
        Race
            .findById(id, callback)
    },

    add: function(race, callback){
        Race.create(race, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Race.remove(query, callback);
    },

    update: function(id, race, options, callback){
        console.log(race);
        if(race._id) delete race._id;
        Race.findOneAndUpdate({ _id: id }, race, options, callback);
    }

}

module.exports = races;