var mongoose = require('mongoose');
var Campain = require('../models/campain');
var User = require('./user');

var campains = {

    get: function(username, callback, limit){
        User.getByUsername(username, (error, user)=>{
            if(user){
                Campain
                    .find({user: user._id}, callback)
                    .limit(limit);
            } else {
                callBack(null, []);
            }
        });
    },

    getById: function(id, callback){
        Campain
            .findById(id, callback);
    },

    add: function(character, callback){
        Campain.create(character, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Campain.remove(query, callback);
    },

    update: function(id, character, options, callback){
        Campain.findByIdAndUpdate(id, character, options, callback);
    }

}

module.exports = campains;