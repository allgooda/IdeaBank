var mongoose = require('mongoose');
var User = require('./models/user');

var users = [
  {
  name:   "adam allgood",
  email: "allgoodadam@gmail.com",
  password: "adam123",
  interval: 60000,
  // ideas: [ideaSchema]
  }
];


  // remove any users in the db
  User.remove({}, function(err) {
    if (err) console.log(err);

      User.create(users, function(err, users) {

        if (err) {
          console.log(err);
        } else {
          console.log(
            "Database seeded with " + users.length  + " users"
          );
          mongoose.disconnect();
        }

    });
  });

