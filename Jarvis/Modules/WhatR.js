/**************************************************************************************/
// module prefix
var WhatR = function() {};

/**************************************************************************************/


WhatR.prototype.what = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\What//\\//\\//\\//\\//\\//\\//\\//\\//\\

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

			if (FQ.indexOf('my') >= 0) { 

				if (FQ.indexOf('name') >= 0) { 

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
			
			if (FQ.indexOf('your ') >= 0) { 

				if (FQ.indexOf('name') >= 0) { 
				if(talk===true){
				say.speak("My full name is Just A Rather Very Intelligent System");
				}
				console.log("Jarvis: My full name is Just A Rather Very Intelligent System");
		
				}
				
			}
	
	
		if (FQ.indexOf('time') >= 0) { 
		
			if(talk===true){
				say.speak("The time is "+hour+":"+min);
				}
		console.log("Jarvis: The time is "+hour+":"+min);
		
		}
		
		if (FQ.indexOf('you ') >= 0) { 
			if(talk===true){
				say.speak("I am an artificial intelligence system that can help you with some daily tasks");
				}
		console.log("Jarvis: I am an artificial intelligence system that can help you with some daily tasks");
		
		}
		
		
			
		else{
			
			//console.log("No what found");
		
		}
	

	
	







}


 /**************************************************************************************/
    // module suffix
module.exports = new WhatR();

/**************************************************************************************/