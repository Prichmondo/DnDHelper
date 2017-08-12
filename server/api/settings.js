const express = require('express');
const Settings = require('../services/settings');
const router = express.Router();

const url = "/settings";

router.get(url, (req, res)=>{
    Settings.get((error, settings)=>{
        if(error){
            throw error;
        }
        res.json(settings);
    });
});

router.get(url + "/:id", (req, res)=>{
    var id = req.params.id;
    Settings.getById(id, (error, setting)=>{
        if(error){
            throw error;
        }
        res.json(setting);
    });
});

router.post(url, (req, res)=>{
    
    var setting = req.body;
    console.log(setting);
    
    Settings.add(setting, (error, setting)=>{
        if(error){
            throw error;
        }
        res.json(setting);
    });
});

router.put(url + "/:id", (req, res)=>{

    var id = req.params.id;
    var setting = req.body;
    
    Settings.update(id, setting, {}, (error, setting)=>{
        if(error){
            throw error;
        }
        res.json(setting);
    });
});

router.delete(url + "/:id", (req, res)=>{
    
    var id = req.params.id;
       
    Settings.delete(id, (error, result)=>{
        if(error){
            throw error;
        }
        res.json(result);
    });

});

module.exports = router;