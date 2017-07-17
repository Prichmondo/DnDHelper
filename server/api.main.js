const express = require('express');
const router = express.Router();

const campains = require('./api/campains');
const characters = require('./api/characters');
const races = require('./api/races');
const characterClasses = require('./api/characterClasses');
const auth = require('./api/authentication');
const users = require('./api/users');
const skills = require('./api/skills');
const specials = require('./api/specials');

router.use(users);
router.use(campains);
router.use(characters);
router.use(races);
router.use(characterClasses);
router.use(auth);
router.use(skills);
router.use(specials);

module.exports = router;
