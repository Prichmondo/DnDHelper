var mongoose = require('mongoose');
var CampaignMileston = require('../models/campaignMilestone');
var User = require('./user');

var campaigns = {

    getById: function(username, id, callback, limit){
        User.getByUsername(username, (error, user)=>{
            if(user){
                CampaignMileston
                    .findOne({user: user._id, _id:id}, callback)
                    .limit(limit);
            } else {
                callBack(null, []);
            }
        });
    },

    add: function(milestone, callback){
        CampaignMileston.create(milestone, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        CampaignMileston.remove(query, callback);
    },

    update: function(id, milestone, options, callback){
        CampaignMileston.findByIdAndUpdate(id, milestone, options, callback);
    }

}

module.exports = campaigns;