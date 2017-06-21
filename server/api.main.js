const express = require('express');
const router = express.Router();

const campains = require('./api/campains')
const characters = require('./api/characters')
const auth = require('./api/authentication')
const users = require('./api/users')

router.use(users);
router.use(campains);
router.use(characters);
router.use(auth);

module.exports = router;
