const express = require('express');
const router = express.Router();

const campains = require('./api/campains')
const characters = require('./api/characters')

router.use(campains);
router.use(characters);

module.exports = router;
