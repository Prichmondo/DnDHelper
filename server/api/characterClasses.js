const express = require('express');
const CharacterClasses = require('../services/characterClasses');
const router = express.Router();

const url = "/character-classes";

router.get(url, (req, res)=>{
    CharacterClasses.get((error, races)=>{
        if(error){
            throw error;
        }
        res.json(races);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    CharacterClasses.getById(id, (error, CharacterClass)=>{
        if(error){
            throw error;
        }
        res.json(CharacterClass);
    });
});

router.post(url, (req, res)=>{
    
    var CharacterClass = req.body;
    console.log(CharacterClass);
    
    CharacterClasses.add(CharacterClass, (error, CharacterClass)=>{
        if(error){
            throw error;
        }
        res.json(CharacterClass);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var CharacterClass = req.body;
    
    CharacterClasses.update(id, CharacterClass, {new: true}, (error, CharacterClass)=>{
        if(error){
            throw error;
        }
        res.json(CharacterClass);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
    console.log("deleted id", id);
    
    CharacterClasses.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

module.exports = router;