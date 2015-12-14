var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var ideaSchema = require("../models/idea");

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  password: String,
  interval: Number,
  ideas: [ideaSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
