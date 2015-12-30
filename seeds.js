var mongoose = require('./config/database');

var User = require('./models/user'),
    Idea = require('./models/idea');


var users = [
  {
    name: "adam allgood",
    email: "allgoodadam@gmail.com",
    password: "12345",
    interval: 10,
    ideas: [
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      }
    ],
    pastIdeas:[]
  },

  {
    name: "evan allgood",
    email: "allgoodadam@gmail.com",
    interval: 160000,
    ideas: [
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      }
    ],
    pastIdeas:[]
  }
];

User.remove({}, function(err) {
  console.log('removed users')
  if (err) console.log(err);

  User.create(users, function(err, users) {
    console.log("made a user");
  });

});


