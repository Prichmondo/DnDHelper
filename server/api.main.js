const express = require('express');
const router = express.Router();

const campains = require('./api/campains')
const characters = require('./api/characters')
const users = require('./api/users')

router.use(users);
router.use(campains);
router.use(characters);

module.exports = router;
