var User = require("../models/user");
var Idea = require("../models/idea");
var mongoose = require('mongoose');

var index = function(req, res, next) {
  Idea.find({}, function(error, ideas) {
    res.json(ideas);
  });
}

var create = function(req, res, next) {
  console.log("Adding idea to user:", req.user, req.body);

  req.user.ideas.push(req.body);

  req.user.save(function(err, user) {
    if(err) {
      res.send(err);
    }
    res.json(user);
  });
}

module.exports = {
  index:index,
  create:create
}
