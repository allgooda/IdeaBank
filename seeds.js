var mongoose = require('./app/config/database');

var User = require('./app/models/user'),
    Idea = require('./app/models/idea');


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
      },
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
    email: "evan@gmail.com",
    password: "12345",
    interval: 160000,
    ideas: [
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      },
      {
      content: "A man with a hat",
      date: "2015-12-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      }
    ],
    pastIdeas:[
      {
      content: 'A man with a hat',
      date: "2015-01-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-02-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-02-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-02-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-03-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-03-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-04-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-05-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-05-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-06-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-06-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-07-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-07-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-07-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-08-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-08-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-09-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-10-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-11-16T22:06:51.024Z"
      },
      {
      content: 'A man with a hat',
      date: "2015-12-16T22:06:51.024Z"
      }
    ]
  }
];

User.remove({}, function(err) {
  console.log('removed users')
  if (err) console.log(err);

  User.create(users, function(err, users) {
    console.log("made a user");
  });

});


