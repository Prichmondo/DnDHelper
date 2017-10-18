const express = require('express');
const router = express.Router();
const Skills = require('../services/skills');

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

module.exports = router;