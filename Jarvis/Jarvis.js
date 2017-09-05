var readline = require('readline-sync');
var say = require('say');
var fs = require('fs');
var WikiS = require('wikipedia');

//created sep 3 2017

var HelloR = require('./Modules/HelloR.js');
var OkayR = require('./Modules/OkayR.js');
var GoodbyeR = require('./Modules/GoodbyeR.js');
var ThanksR = require('./Modules/ThanksR.js');
var RemindMe = require('./Modules/RemindMe.js');
var WhatR = require('./Modules/WhatR.js');
var WhoR = require('./Modules/WhoR.js');
var LaughR = require('./Modules/LaughR.js');
var NameR = require('./Modules/NameR.js');
var PlaySong = require('./Modules/PlayMusic.js');
var Wiki = require("wikipedia");
var Serena = require('./Serena/Serena.js');
var Help = require('./Modules/Help.js');
var Reset = require('./Modules/Reset.js');

var username = fs.readFileSync('./Modules/Fname.js', "utf8");
var userLname = fs.readFileSync('./Modules/Lname.js', "utf8");
var nameknown = JSON.parse(fs.readFileSync('./Modules/NameK.js', "utf8"));




var hourR;
var minR;
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

var remind=false;



var talk=true;

if(nameknown===true){
say.speak("Welcome back mister"+userLname);

}

if(nameknown===false){
say.speak("Hello sir, welcome back");

}

			console.log("");
			console.log("");
			console.log("--------------------------------------------------------");
			console.log("Here are all the current things you can do");
			console.log("--------------------------------------------------------");
			console.log("You can tell Jarvis your name, it cannot be one word and your name must be at the end of your sentence");
			console.log("--------------------------------------------------------");
			console.log("You can ask Jarvis to set a reminder by saying 'Remind me', he will then go through the process of setting the reminder with you");
			console.log("--------------------------------------------------------");
			console.log("You can ask Jarvis the time");
			console.log("--------------------------------------------------------");
			console.log("He can also reply to basic 'Hello, Goodbye, Okay, haha, etc'");
			console.log("--------------------------------------------------------");
			console.log("You can have Jarvis search the internet using 'Search' and then the item you want to search. This is a little buggy at the moment and will cause the program to close out. No damage occurs");
			console.log("--------------------------------------------------------");
			console.log("You can play a song from iTunes by typing 'Play song' and then the song you want to be played.");
			console.log("--------------------------------------------------------");
			console.log("You can access Serena (A question and answer database) by typing 'Serena'");
			console.log("--------------------------------------------------------");
			console.log("You can reset what he has learned by typing'!reset'");
			console.log("--------------------------------------------------------");
			console.log("You can access this menu any time using '!help'");
			console.log("--------------------------------------------------------");
			console.log("");
			console.log("");
var t=1;



while (t==1){

username = fs.readFileSync('./Modules/Fname.js', "utf8");
userLname = fs.readFileSync('./Modules/Lname.js', "utf8");
nameknown = JSON.parse(fs.readFileSync('./Modules/NameK.js', "utf8"));


var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

RemindMe.remindcheck(FQ, nameknown, talk, userLname, username, remind);

	var FQ = readline.question("You: ");
	//var FQ = FQUpper.toLowerCase();
	
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\What//\\//\\//\\//\\//\\//\\//\\//\\//\\

	if (FQ.indexOf('what') >= 0 || FQ.indexOf('What') >= 0) {
	
		
			WhatR.what(FQ, nameknown, talk, userLname, username);
			
			continue;
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Who//\\//\\//\\//\\//\\//\\//\\//\\//\\	
	if (FQ.indexOf('who') >= 0 || FQ.indexOf('Who') >= 0) { 

		
		WhoR.who(FQ, nameknown, talk, userLname, username);
		continue;

	}
		
//\\//\\//\\//\\//\\//\\//\\//\\//\\Name//\\//\\//\\//\\//\\//\\//\\//\\//\\		
	if (FQ.indexOf('my') >= 0 || FQ.indexOf('My') >= 0 || FQ.indexOf('I am') >= 0) { 

		NameR.name(FQ, nameknown, talk, userLname, username);
		continue;
		
	
	
	}
//\\//\\//\\//\\//\\//\\//\\//\\//\\Hello//\\//\\//\\//\\//\\//\\//\\//\\//\\

if (FQ.indexOf('Hello') >= 0 || FQ.indexOf('hello') >= 0 || FQ.indexOf('Hi') >= 0 || FQ.indexOf('hi') >= 0) { 

	HelloR.hello(FQ, nameknown, talk, userLname, username);
	continue;

}


//\\//\\//\\//\\//\\//\\//\\//\\//\\Okay//\\//\\//\\//\\//\\//\\//\\//\\//\\

	
	if(FQ==="Ok" || FQ==="Okay"){
		OkayR.okay(FQ, nameknown, talk, userLname, username);
		continue;
	
	}
//\\//\\//\\//\\//\\//\\//\\//\\//\\Thank you//\\//\\//\\//\\//\\//\\//\\//\\//\\
	if(FQ.indexOf('Thanks') >= 0 || FQ.indexOf('thank you') >= 0 || FQ.indexOf('Thank you') >= 0){
	
		ThanksR.thanks(FQ, nameknown, talk, userLname, username);
		
		continue;
	
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Remind me//\\//\\//\\//\\//\\//\\//\\//\\//\\	
	if(FQ==="Remind me"){
		RemindMe.remind(FQ, nameknown, talk, userLname, username);
		
		remind=true;
		continue;
	}
	
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Goodbye//\\//\\//\\//\\//\\//\\//\\//\\//\\	
	if(FQ.indexOf("Bye") >= 0 || FQ.indexOf("bye") >= 0 || FQ.indexOf("See ya") >= 0 || FQ.indexOf("see ya") >= 0 || FQ.indexOf("goodbye") >= 0 || FQ.indexOf("Goodbye") >= 0){
	
		GoodbyeR.GbyeR(FQ, nameknown, talk, userLname, username);
		continue;
	
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Search//\\//\\//\\//\\//\\//\\//\\//\\//\\

if(FQ.indexOf('Search') >= 0){
	
		FQ=FQ.replace('Search ','');
		FQ=FQ.replace('What is','');
		
		Wiki.wiki(FQ);
		
		
		return;
	
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Play Music//\\//\\//\\//\\//\\//\\//\\//\\//\\

if(FQ.indexOf('Play song ') >= 0){
	
		FQ=FQ.replace('Play song ','');
		
		PlaySong.search(FQ);
		
		
		return;
	
	}


	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Laughing//\\//\\//\\//\\//\\//\\//\\//\\//\\
	if(FQ.indexOf('Haha') >= 0 || FQ.indexOf('haha') >= 0 || FQ.indexOf('lol') >= 0 || FQ.indexOf('XD ') >= 0 || FQ.indexOf('lmao') >= 0 || FQ.indexOf('rotfl') >= 0){
	
	
		LaughR.laugh(FQ, nameknown, talk, userLname, username);
	
		continue;
	
	}
	
	
	//\\//\\//\\//\\//\\//\\//\\//\\//\\Laughing//\\//\\//\\//\\//\\//\\//\\//\\//\\
	if(FQ==="Serena" || FQ==="Serena"){
		console.log("");
		console.log("");
		console.log("--------------------------------------------------------");
	
		Serena.start(username, userLname, nameknown, talk);
		
		console.log("--------------------------------------------------------");
		console.log("");
		console.log("");
		
	
		continue;
	
	}
	
	

//\\//\\//\\//\\//\\//\\//\\//\\//\\Help//\\//\\//\\//\\//\\//\\//\\//\\//\\

if(FQ==="!help" || FQ==="!Help"){
	
	
		Help.help(FQ, nameknown, talk, userLname, username);
	
	
		continue;
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Reset//\\//\\//\\//\\//\\//\\//\\//\\//\\

	if(FQ==="!reset" || FQ==="!Reset"){
	
	
		Reset.reset(FQ, nameknown, talk, userLname, username);
	
	
		continue;
	}
	
//\\//\\//\\//\\//\\//\\//\\//\\//\\Does not compute//\\//\\//\\//\\//\\//\\//\\//\\//\\

	else{
	if(nameknown===false){
				say.speak("I'm sorry, I do not understand");
				console.log("Jarvis: I'm sorry, I do not understand");
			
			}
			if(nameknown===true){
				say.speak("I'm sorry mister "+userLname+", I do not understand");
				console.log("Jarvis: I'm sorry mister "+userLname+", I do not understand");
			}
		
	
	
	
	}
	
	

	
}

