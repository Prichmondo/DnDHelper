const express = require('express');
const router = express.Router();
const commons = require('../models/commons')

const url = "/rolebook";

router.get(url, (req, res)=>{
    res.status(200).send(commons);
});

module.exports = router;