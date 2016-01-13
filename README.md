<img align="middle"> [![IdeaBank](https://i.imgur.com/OSdnwIS.png)](https://evening-fjord-4234.herokuapp.com/) </img>

---

###Introduction

Have you ever had a good idea for something but forgot it because you couldnt conveniently write it down? This is where IdeaBank comes in. Ideabank is a web app for any creative person. If you have an idea for a song, book, script, or website simply submit into the Idea Bank and we remind you of you great idea by emailing to you at a time interval of your choosing whether it be a day, week, month or year.

###Installation and Use

Idea Bank is compatible with any browser and mobile device. Simply click [HERE](https://evening-fjord-4234.herokuapp.com/) to visit the site.

Click the top right to create an account and choose a time interval. After, you will be able to login and start submitting ideas.

Once you have accumulated some ideas, visit your profile page to see an interactive chart showing trends in your ideas base on the months of the year.
    
###Behind the Scenes

Visit my [trello.com](https://trello.com/b/V0gjWrMy/ideabank) to see how I organized, planned my goals, milestones and issues.

###Minimum Viable Product

####Completed User Stories

- [x] As a user I should be able to Log in to my account.
- [x] As a user I should have a profile page which shows how many ideas I've input.
- [x] As a user I should be able to set a time interval for when i receive my ideas via email
- [x] As a user the IdeaBank should email me my ideas that I submitted within the previous time interval
- [x] As a user my ideas should be linked to my account
- [x] As a user I should have a log out button in order to log out of my account 
- [x] As a user my profile page should have a graph which shows trends in my ideas.
- [x] As user the profile page should display my name
- [x] As a user I should be able to submit thoughts and ideas I have throughout the day.
- [x] As a user I should be able to create an account

####Current User Stories
- [ ] As a user my name and picture should be displayed when I log in.

### Installations required

#### Package dependancies:
- Below is a snippet of our package.json so you can npm install all package dependancies.

```
   "dependencies": {
    "angular-chart": "^0.3.2",
    "angular-chart.js": "^0.8.8",
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "dotenv": "^1.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "jsonwebtoken": "0.4.0",
    "lodash": "^3.10.1",
    "moment": "^2.10.6",
    "mongoose": "4.3.1",
    "mongoose-bcrypt": "^1.2.3",
    "morgan": "~1.6.1",
    "nodemailer": "^1.11.0",
    "serve-favicon": "~2.3.0"
  }
```

####Angular Chart.js

Angular Chart.js is an angular compatible version of Chart.js which was used to create graphs of the user ideas. I installed by using npm install.

    npm install angular-chartjs --save
    
Visit https://www.npmjs.com/package/angular-chartjs for more information.

####NodeMailer

Nodemailer was the technology I user in order to send emails from my own email account to the users. To install:

    npm install nodemailer
    
Visit https://github.com/nodemailer/nodemailer for more documentation.

