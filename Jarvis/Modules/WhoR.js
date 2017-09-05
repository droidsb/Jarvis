/**************************************************************************************/
// module prefix
var WhoR = function() {};

/**************************************************************************************/


WhoR.prototype.who= function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Who//\\//\\//\\//\\//\\//\\//\\//\\//\\

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

			if (FQ.indexOf('you') >= 0) { 
			if(talk===true){
				say.speak("I am an artificial intelligence system that can help you with some daily tasks");
				}
		console.log("Jarvis: I am an artificial intelligence system that can help you with some daily tasks");
		
		}
		
		
		 if (FQ.indexOf('Am I') >= 0 || FQ.indexOf('am I') >= 0){
		 
		 	if(nameknown===false){
		 	if(talk===true){
				say.speak("I do not know your name");
				}
				console.log("Jarvis: I do not know your name");
				
				}
				
			if(nameknown===true){
			if(talk===true){
				say.speak("Your name is "+username+" "+userLname);
				}
				console.log("Jarvis: Your name is "+username+" "+userLname);
				
				}
		 
		 
		 
		 }

	}
	
	
	
		
		
			

	

	
	










 /**************************************************************************************/
    // module suffix
module.exports = new WhoR();

/**************************************************************************************/