const express = require('express');
const router = express.Router();
const AuthService = require('../services/authentication');
const Campaigns = require('../services/campaigns');

const url = "/campaigns";

router.get(url, AuthService.check, (req, res) => {
  
  Campaigns.get(req.user.username, (error, campaign)=>{
      if(error){
          throw error;
      }
      res.json(campaign);
  });

});

router.get(url + "/:id", AuthService.check, (req, res) => {
  var id = req.params.id;
  Campaigns.getById(req.user.username, id, (error, campaign)=>{
      if(error){
          throw error;
      }
      res.json(campaign);
  });

});
  
module.exports = router;