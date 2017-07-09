const express = require('express');
const Races = require('../services/races');
const router = express.Router();

const url = "/races";

router.get(url, (req, res)=>{
    Races.get((error, races)=>{
        if(error){
            throw error;
        }
        res.json(races);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    Races.getById(id, (error, race)=>{
        if(error){
            throw error;
        }
        res.json(race);
    });
});

router.post(url, (req, res)=>{
    
    var race = req.body;
    console.log(race);
    
    Races.add(race, (error, race)=>{
        if(error){
            throw error;
        }
        res.json(race);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var race = req.body;
    
    Races.update(id, race, {}, (error, race)=>{
        if(error){
            throw error;
        }
        res.json(race);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
    console.log("deleted id", id);
    
    Races.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

module.exports = router;