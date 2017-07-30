const express = require('express');
const router = express.Router();
const AuthService = require('../services/authentication');
const Campains = require('../services/campains');

router.route("/campains")
  .get(AuthService.check, (req, res) => {
    console.log(req.user)
    Campains.get(req.user.username, (error, campain)=>{
        if(error){
            throw error;
        }
        res.json(campain);
    });
  })
  .post(()=>{})
  .put(()=>{})
  .delete(()=>{});

module.exports = router;