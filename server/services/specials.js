var mongoose = require('mongoose');
var Special = require('../models/special');

var spacials = {

    get: function(callback, limit){
        Special
            .find(callback)
            .limit(limit);
    },

    getById: function(id, callback){
        Special
            .findById(id, callback)
    },

    add: function(special, callback){
        Special.create(special, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Special.remove(query, callback);
    },

    update: function(id, spacial, options, callback){
        Special.findByIdAndUpdate(id, spacial, options, callback);
    }

}

module.exports = spacials;