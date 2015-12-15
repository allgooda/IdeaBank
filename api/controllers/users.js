var User = require("../models/user");
var Idea = require("../models/idea");
var mongoose = require('mongoose');

var index = function(req, res, next) {
    User.find({}, function(error, users) {
      res.json(users);
    });
};

var show = function(req, res, next) {
  User.findById(req.params.id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render('users/show', {user: user});
  });
};




module.exports = {
  index:index,
  show:show
};
