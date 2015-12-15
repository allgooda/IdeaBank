var _ = require('lodash');

var localEnvVars = {
  TITLE:      'IdeaBank',
  SAFE_TITLE: 'Idea-Bank',
  SECRET_KEY: 'notsosecretanymoreisityounaughtything'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
