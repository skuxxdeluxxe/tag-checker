const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say-something', controllers.saySomething);

router.get('/tag-checker', controllers.tagChecker);

router.post('/tag-checker', controllers.tagChecker);

module.exports = router;