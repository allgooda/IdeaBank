var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Idea Bank',
  SAFE_TITLE: 'IdeaBank'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
