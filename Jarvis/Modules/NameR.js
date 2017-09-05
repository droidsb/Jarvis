/**************************************************************************************/
// module prefix
var NameR = function() {};

/**************************************************************************************/


NameR.prototype.name= function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
var fs = require('fs');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Laugh//\\//\\//\\//\\//\\//\\//\\//\\//\\

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

			if (FQ.indexOf('name') >= 0) { 
		
			var name = FQ.split(" ");
			var username = name[name.length - 1];
			if(talk===true){
				say.speak("Hello "+username+", I shall remember your name");
				}
    		console.log("Jarvis: Hello "+username+", I shall remember your name");
    		sleep(3000);
    		if(talk===true){
				say.speak("What is your last name?");
				}
    		console.log("Jarvis: What is your last name?");
    		
    		var LN = readline.question("You: ");
    		
    		var Lname = LN.split(" ");
			var userLname = Lname[Lname.length - 1];
			
    		nameknown = true;
    		
    		
    		fs.writeFileSync('./Fname.js', username);
    		fs.writeFileSync('./Lname.js', userLname);
    		fs.writeFileSync('./NameK.js', "true");
		}
		
		if (FQ.indexOf('I am') >= 0) { 
		
			var name = FQ.split(" ");
			var username = name[name.length - 1];
			if(talk===true){
				say.speak("Hello "+username+", I shall remember your name");
				}
			
    		console.log("Jarvis: Hello "+username+", I shall remember your name");
    		sleep(3000);
    		if(talk===true){
				say.speak("What is your last name?");
				}
    		console.log("Jarvis: What is your last name?");
    		
    		var LN = readline.question("You: ");
    		
    		var Lname = LN.split(" ");
			var userLname = Lname[Lname.length - 1];
			
    		nameknown = true;
    		
    		fs.writeFileSync('./Fname.js', username);
    		fs.writeFileSync('./Lname.js', userLname);
    		fs.writeFileSync('./NameK.js', "true");
    		
		}
	
	
	
		
		
			

	


	}










 /**************************************************************************************/
    // module suffix
module.exports = new NameR();

/**************************************************************************************/