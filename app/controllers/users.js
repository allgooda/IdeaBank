var User = require("../models/user");
var Idea = require("../models/idea");
var mongoose = require('mongoose');
var nodemailer   = require('nodemailer');


var index = function(req, res, next) {
  User.find({}, function(error, users) {
    res.json(users);
  });
};

var buildHtml = function(ideas, user) {
  var header = "<h2> Hello," + user.name + " here are your ideas: </h2><br>";
}

var emailUser = function(ideas, user) {
  if(ideas.length > 0) {
    for (var i = 0; i < ideas.length; i++){
      var list = []
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ideabankemail@gmail.com',
            pass:
        }
    }, {
        // default values for sendMail method
        from: 'sender@address',
        headers: {
            'My-Awesome-Header': '123'
        }
    });
    transporter.sendMail({
      to: user.email,
      subject: 'Your Ideas!',
      html: "<h1>" + ideas[i].content + "</h1>"
    });
  }
}

var myVar = setInterval(function() { sendEmails() }, 10000);

var sendEmails = function(req, res, next) {
  User.find({}, function(error, users) {
    users.forEach(function(user) {
      var sendRetire = [];

      user.ideas.forEach(function(idea) {

        var seconds = Math.floor((Date.now() - idea.date.getTime()) / 1000);

        if (seconds >= user.interval) {
          sendRetire.push(idea);
        }
        console.log(seconds);
      });

      for (var i = 0; i < sendRetire.length; i++) {
        user.ideas.shift();
      }

      if (sendRetire.length > 0) {
        sendRetire.forEach(function(pIdea) {
          user.pastIdeas.push(pIdea);
        })
      }
      console.log(sendRetire);
      user.save(function(err) {
        if (err) res.send(err);


        emailUser(sendRetire, user);
      });
    });
  });
}

var show = function(req, res, next) {
  User.findById(req.params.id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render('users/show', {user: user});
  });
};


module.exports = {
  index:index,
  show:show,
  // sendEmails:sendEmails
};
