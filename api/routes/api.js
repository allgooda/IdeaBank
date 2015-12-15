var express = require('express');
var router = express.Router();
var User = require("../models/user");
var mongoose = require('mongoose');
var usersController = require('../controllers/users');
var ideasController = require('../controllers/ideas');
var jwt          = require("jsonwebtoken");


/* GET users listing. */


router.get('/users', usersController.index);
// router.post('/users', usersController.create);
router.get('/users/:id', usersController.show);

router.get('/ideas', ideasController.index);
router.post('/ideas', ideasController.create)


module.exports = router;
