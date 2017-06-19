const express = require('express');
const router = express.Router();
const AuthService = require('../services/authentication');

const url = "/auth";

router.post(url + "/login", (req, res)=>{
    
    var user = req.body;

    AuthService.login(user, function(authResp, error){
        
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
    })

});

module.exports = router;