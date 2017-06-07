const express = require('express');
const router = express.Router();

router.route("/campains")
  .get((req, res) => {
    res.json({ name: "Dragon Lance" });
  })
  .post(()=>{})
  .put(()=>{})
  .delete(()=>{});

module.exports = router;