const express = require('express');
const UserService = require('../services/user');
const router = express.Router();
const auth = require('../services/authentication');

const url = "/users";

router.get(url, auth.check, (req, res)=>{
    UserService
        .getAll((error, users)=>{
            if(error){
                throw error;
            }
            res.json(users);
        });
});

router.post(url, (req, res)=>{
    
    var user = req.body;
    
    console.log("USER POST BODY", req.body);

    UserService
        .create(user, (error, user)=>{
            if(error){
                throw error;
            }
            res.json(user);
        });
});

module.exports = router;