const express = require('express');
const router = express.Router();

const campaigns = require('./api/campaigns');
const characters = require('./api/characters');
const races = require('./api/races');
const characterClasses = require('./api/characterClasses');
const auth = require('./api/authentication');
const users = require('./api/users');
const skills = require('./api/skills');
const specials = require('./api/specials');
const rulebook = require('./api/rulebook');

router.use(users);
router.use(campaigns);
router.use(characters);
router.use(races);
router.use(characterClasses);
router.use(auth);
router.use(skills);
router.use(specials);
router.use(rulebook);

module.exports = router;
