var mongoose = require('mongoose');
var Campaign = require('../models/campaign');
var User = require('./user');

var campaigns = {

    get: function(username, callback, limit){
        User.getByUsername(username, (error, user)=>{
            if(user){
                Campaign
                    .find({user: user._id}, callback)
                    .limit(limit)
                    .populate("setting")
                    .populate("CampaignMilestone");
            } else {
                callBack(null, []);
            }
        });
    },

    getById: function(username, id, callback, limit){
        User.getByUsername(username, (error, user)=>{
            if(user){
                Campaign
                    .findOne({user: user._id, _id:id}, callback)
                    .limit(limit)
                    .populate("setting")
                    .populate("CampaignMilestone");
            } else {
                callBack(null, []);
            }
        });
    },

    add: function(username, campaign, callback){
        User.getByUsername(username, (error, user)=>{
            if(user){
                campaign.user = user._id;
                Campaign.create(campaign, callback);
            } else {
                callBack(null, []);
            }
        });        
    },

    delete: function(id, callback){
        var query = { _id: id };
        Campaign.remove(query, callback);
    },

    update: function(id, character, options, callback){
        Campaign.findByIdAndUpdate(id, character, options, callback);
    }

}

module.exports = campaigns;