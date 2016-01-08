  var moment = require('moment'),
    User   = require('../models/user');

module.exports = function(app, errorHandler) {

  app.post('/api/users',

    // validations
    checkUserFields,
    checkPassword,
    checkUserExists,

    // create new user
    function(req, res, next) {
      User.create({
        name:     req.body.name,
        email:    req.body.email,
        password: req.body.password,
        interval: req.body.interval
      }).then(function(newUser) {
        res.json({
          success: true,
          message: 'Successfully created user.',
          data: {
            email: newUser.email,
            id:    newUser._id
          }
        });
      }).catch(function(err) {
        next(err);
      });
  });

  // *** VALIDATIONS ***

  function checkUserFields(req, res, next) {
    if (
      !req.body.name     ||
      !req.body.email    ||
      !req.body.password ||
      !req.body.interval
    ) {
      errorHandler(
        422,
        'Missing required field: one of email, name, password, or dob.',
        req, res
      );
    } else {
      next();
    }
  }

  function checkPassword(req, res, next) {
    if (req.body.password.length < 5) {
      errorHandler(
        422,
        'Password field must have minimum of 5 characters.',
        req, res
      );
    } else {
      next();
    }
  }

  function checkUserExists(req, res, next) {
    User.find({email: req.body.email}).exec()
      .catch(function(err) {
        next(err);
    }).then(function(users) {
        if (users.length > 0) {
          errorHandler(
            422,
            'User email already exists.',
            req, res
          );
        } else {
          next();
        }
    });
  }

};
