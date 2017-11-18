const express = require('express');
const UserService = require('../services/user');
const router = express.Router();
const AuthService = require('../services/authentication');

const url = "/users";

router.get(url, AuthService.check, (req, res)=>{
    UserService
        .getAll((error, users)=>{
            if(error){
                throw error;
            }
            res.json(users);
        });
});

router.post(url, (req, res)=>{
    
    var userForm = req.body;
    
    UserService
        .create(userForm, (error, user)=>{
            if(error){
                throw error;
            }

            AuthService.login(userForm, function(authResp, error){
        
                if(authResp){            
                    res.status(200).send({
                        userId:     authResp.user._id,
                        username:   authResp.user.username,
                        created:    authResp.user.createDate,
                        token:      authResp.token
                    });
                } else {
                    res.status(400).end(error);
                }

            });

        });
});

module.exports = router;