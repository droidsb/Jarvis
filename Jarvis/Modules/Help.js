/**************************************************************************************/
// module prefix
var Help = function() {};

/**************************************************************************************/


Help.prototype.help = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Help//\\//\\//\\//\\//\\//\\//\\//\\//\\
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
			console.log("You can access Lee (A question and answer database) by typing 'Lee'");
			console.log("--------------------------------------------------------");
			console.log("You can reset what he has learned by typing'!reset'");
			console.log("--------------------------------------------------------");
			console.log("You can access this menu any time using '!help'");
			console.log("--------------------------------------------------------");
			console.log("");
			console.log("");

	
	







}


 /**************************************************************************************/
    // module suffix
module.exports = new Help();

/**************************************************************************************/