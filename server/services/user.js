var mongoose = require('mongoose');
var UserModel = require('../models/user');

var user = {

    getAll: function(callback, limit){
        UserModel
            .find(callback)
            .limit(limit);
    },

    getById: function(id, callback){
        UserModel
            .findById(id, callback);
    },

    getByUsername: function(username, callback){
        UserModel
            .findOne({ username: username }, callback);
    },

    create: function(user, callback){
        UserModel
            .create(user, callback);
    },

    update: function(){

    },

    delete: function(){

    }

}

module.exports = user;