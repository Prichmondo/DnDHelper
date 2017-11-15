const express = require('express');
const router = express.Router();
const Skills = require('../services/skills');
const common = require('../schemas/commons')

const url = "/skills";

router.get(url, (req, res)=>{
    Skills.get((error, skills)=>{
        if(error){
            throw error;
        }
        res.json(skills);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    Skills.getById(id, (error, skill)=>{
        if(error){
            throw error;
        }
        res.json(skill);
    });
});

router.post(url, (req, res)=>{
    
    var skill = req.body;

    Skills.add(skill, (error, skill)=>{
        if(error){
            throw error;
        }
        res.json(skill);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var skill = req.body;
    
    Skills.update(id, skill, {}, (error, skill)=>{
        if(error){
            throw error;
        }
        res.json(skill);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
    console.log("deleted id", id);
    
    Skills.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

router.post(url + "/baseline", (req, res)=>{
    
    var allSkills = common.skills.map(skill=>{
        return {
            name: skill.name,
            modifier: skill.modifier,
            trainedOnly: skill.trainedOnly,
            synergies: []
        }
    });
    
    Skills.get((error, skills)=>{
        
        if(error){
            throw error;
        }       
        
        var skillNames = skills.map(skill=>skill.name);
        var baselineSkills = allSkills.filter(skill=>{
            for(var i=0, skillName; i<skillNames.length; i++){
                skillName = skillNames[i];
                if(skillName===skill.name){
                    return false;
                }
            }
            return true;
        });

        Skills.add(baselineSkills, (error, skills)=>{
    
            if(error){
                throw error;
            }
            res.json(skills);
        });

    });   

});

module.exports = router;