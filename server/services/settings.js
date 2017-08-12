var mongoose = require('mongoose');
var Setting = require('../models/setting');

var settings = {

    get: function(callback, limit){
        Setting
            .find(callback)
            .limit(limit)
            .populate("setting");
    },

    getById: function(id, callback){
        Setting
            .findById(id, callback)
            .populate("setting");
    },

    add: function(setting, callback){
        Setting.create(setting, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Setting.remove(query, callback);
    },

    update: function(id, setting, options, callback){
        if(setting._id) delete setting._id;
        Setting.findOneAndUpdate({ _id: id }, setting, options, callback);
    }

}

module.exports = settings;