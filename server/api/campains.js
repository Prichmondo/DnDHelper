const express = require('express');
const router = express.Router();
const auth = require('../services/authentication');

router.route("/campains")
  .get(auth.check, (req, res) => {
    res.json({ name: "Dragon Lance" });
  })
  .post(()=>{})
  .put(()=>{})
  .delete(()=>{});

module.exports = router;