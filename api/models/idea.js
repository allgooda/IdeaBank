var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var ideaSchema = new mongoose.Schema({
  content: String,
  date: {type: Date, default: Date.now}
});

var Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
