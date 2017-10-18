const express = require('express');
const router = express.Router();
const commons = require('../schemas/commons')

const url = "/rulebook";

router.get(url, (req, res)=>{
    res.status(200).send(commons);
});

module.exports = router;