const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/tag-checker', controllers.tagChecker);

module.exports = router;