const express = require('express');
const router = express.Router();
const Specials = require('../services/specials');

const url = "/specials";

router.get(url, (req, res)=>{
    Specials.get((error, specials)=>{
        if(error){
            throw error;
        }
        res.json(specials);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    Specials.getById(id, (error, special)=>{
        if(error){
            throw error;
        }
        res.json(special);
    });
});

router.post(url, (req, res)=>{
    
    var special = req.body;

    Specials.add(special, (error, special)=>{
        if(error){
            throw error;
        }
        res.json(special);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var special = req.body;
    
    Specials.update(id, special, {}, (error, special)=>{
        if(error){
            throw error;
        }
        res.json(special);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
    console.log("deleted id", id);
    
    Specials.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

module.exports = router;