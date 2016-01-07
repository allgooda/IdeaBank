var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var ideaSchema = new mongoose.Schema({
  content: String,
  date: {type: Date, default: Date.now}
});

var userSchema = new mongoose.Schema({
  name:     String,
  email:    String,
  interval: String,
  ideas:   [ideaSchema],
  pastIdeas: Array
});

userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;
