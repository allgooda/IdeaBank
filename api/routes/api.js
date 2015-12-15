var express = require('express');
var router = express.Router();
var User = require("../models/user");
var mongoose = require('mongoose');
var usersController = require('../controllers/users');
var ideasController = require('../controllers/ideas');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('jfdlskjfsjlk');
});

router.get('/users', usersController.index);
router.post('/users', usersController.create);

router.get('/ideas', ideasController.index);
router.post('/ideas', ideasController.create)

module.exports = router;
