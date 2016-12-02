// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require('./models');


var myWorks_lists = [
  {
    title: "Homework #1",
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    websiteUrl: "###",
    githubUrl: "https://github.com/yasuper8/problem-set-js-basics",
    projectImgUrl: "###"
  },
  {
    title: "Homework #2",
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    websiteUrl: "####",
    githubUrl: "https://github.com/yasuper8/functions-exercises",
    projectImgUrl: "###"
  },
  {
    title: "Tic-Tac-Toe",
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    websiteUrl: "http://paratrooper-neville-45138.bitballoon.com/",
    githubUrl: "https://github.com/yasuper8/tic-tac-toe",
    projectImgUrl: "http://i.imgur.com/l5vP10X.png"
  },
  {
    title: "Memory Game",
    descriptions: "Instructions: A player needs to find all matching pairs without making mistake in order to complete this game. If the player picked a mismatching pair, all flipped cards will face down.",
    websiteUrl: "http://yasu-concentration-game.bitballoon.com",
    githubUrl: "https://github.com/yasuper8/problem-set-js-basics",
    projectImgUrl: "http://i.imgur.com/5DrwsYT.png"
  },{
    title: "Lingo Jubgle",
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    websiteUrl: "https://sleepy-crag-66146.herokuapp.com/",
    githubUrl: "https://github.com/yasuper8/Project1",
    projectImgUrl: "http://i.imgur.com/jTaCmZ6.jpg"
  }
];

db.MyWork.remove({}, function(err, mywork) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed all users');
    db.MyWork.create(myWorks_lists, function(err, mywork) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + mywork.length + ' my works');
      process.exit();
    });
  }
});
