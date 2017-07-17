var mongoose = require('mongoose');
var Skill = require('../models/skill');

function mapSkill(skill){
    return {
        _id: skill._id,
        name: skill.name,
        modifier: skill.modifier,
        trainedOnly: skill.trainedOnly,
        synergies: skill.synergies.map(s => s.name) 
    }
}

function mapSkills(res){
    var skills = {};
    res.map((skill)=>{
        skills[skill.name] = mapSkill(skill);
    });
    return skills;
}

var skills = {

    get: function(callback, limit){
        Skill
            .find((req, res)=>{
                callback(req, mapSkills(res));
            })
            .limit(limit)
            .populate("synergies");
    },

    getById: function(id, callback){
        Skill
            .findById(id, callback)
            .populate("skill");
    },

    add: function(skill, callback){
        Skill.create(skill, callback);
    },

    delete: function(id, callback){
        var query = { _id: id };
        Skill.remove(query, callback);
    },

    update: function(id, skill, options, callback){
        Skill.findByIdAndUpdate(id, skill, options, callback);
    }

}

module.exports = skills;