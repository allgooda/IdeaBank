var User = require("../models/user");
var Idea = require("../models/idea");
var mongoose = require('mongoose');

var index = function(req, res, next) {
  Idea.find({}, function(error, ideas) {
    res.json(ideas);
  });
}

var create = function(req, res, next) {
  Idea.create(req.body, function(err, idea) {
    if(err) {
      res.send(err);
    }
    res.json(idea);
  });
}

module.exports = {
  index:index,
  create:create
}
