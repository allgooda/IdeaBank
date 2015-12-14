var User = require("../models/user");
var Idea = require("../models/idea");
var mongoose = require('mongoose');

var index = function(req, res, next) {
    User.find({}, function(error, users) {
      res.json(users);
    });
};

var create = function(req, res, next) {
  User.create(req.body, function(err, user) {
    if(err) {
      res.send(err);
    }
    res.json(user);
   });
}
module.exports = {
  index:index,
  create:create
};
