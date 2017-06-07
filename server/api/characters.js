const express = require('express');
const Character = require('../models/character');
const Characters = require('../controllers/characters');
const router = express.Router();

const url = "/characters";

router.get(url, (req, res)=>{
    Characters.get((error, characters)=>{
        if(error){
            throw error;
        }
        res.json(characters);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    Characters.getById(id, (error, character)=>{
        if(error){
            throw error;
        }
        res.json(character);
    });
});

router.post(url, (req, res)=>{
    
    var character = req.body;
    
    Characters.add(character, (error, character)=>{
        if(error){
            throw error;
        }
        res.json(character);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var character = req.body;
    
    Characters.update(id, character, {}, (error, character)=>{
        if(error){
            throw error;
        }
        res.json(character);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
    console.log("deleted id", id);
    
    Characters.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

module.exports = router;