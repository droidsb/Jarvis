/**************************************************************************************/
// module prefix
var HelloR = function() {};

/**************************************************************************************/


HelloR.prototype.hello = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Hello//\\//\\//\\//\\//\\//\\//\\//\\//\\

	
		if (FQ.indexOf('morning') >= 0 || FQ.indexOf('Morning') >= 0) { 
				if(nameknown===false){
				if(talk===true){
				say.speak('Good morning sir');
				}
				console.log("Jarvis: Good morning sir");
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Good morning mister "+userLname);
				}
				console.log("Jarvis: Good morning mister "+userLname);
				
				}
			}
	
		if (FQ.indexOf('afternoon') >= 0 || FQ.indexOf('Afternoon') >= 0) { 
			if(nameknown===false){
			if(talk===true){
				say.speak("Good afternoon sir");
				}
				console.log("Jarvis: Good afternoon sir");
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Good afternoon mister "+userLname);
				}
				console.log("Jarvis: Good afternoon mister "+userLname);
				
				}
		}
	
		if (FQ.indexOf('day') >= 0 || FQ.indexOf('Day') >= 0) { 

		if(nameknown===false){
		if(talk===true){
				say.speak("Good day sir");
				}
				console.log("Jarvis: Good day sir");
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Good day mister "+userLname);
				}
				console.log("Jarvis: Good day mister "+userLname);
				
				}
		}
		if (FQ.indexOf('evening') >= 0 || FQ.indexOf('Evening') >= 0) { 

		if(nameknown===false){
		if(talk===true){
				say.speak("Good evening sir");
				}
				console.log("Jarvis: Good evening sir");
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Good evening mister "+userLname);
				}
				console.log("Jarvis: Good evening mister "+userLname);
				
				}
		}
	
		if (FQ.indexOf('night') >= 0 || FQ.indexOf('Night') >= 0) { 

		if(nameknown===false){
		if(talk===true){
				say.speak("Good night sir ");
				}
				console.log("Jarvis: Good night sir");
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Good night mister "+userLname);
				}
				console.log("Jarvis: Good night mister "+userLname);
				
				}
		}
	
		if(FQ.indexOf('Hello') >= 0 || FQ.indexOf('hello') >= 0|| FQ.indexOf('Hi') >= 0 || FQ.indexOf('hi') >= 0){
		
		var hellos = ["Hello sir, would you mind telling me your name?", "Greetings, how are you sir?", "Good day sir, I am at your service", "Hello, I hope your day has been well so far, may I ask your name?", "Hello to you to sir"]
		var answer = hellos[Math.floor(Math.random() * hellos.length)]
			if(nameknown===false){
			if(talk===true){
				say.speak(answer);
				}
				console.log("Jarvis: "+answer);
				
				}
				
				if(nameknown===true){
				
				var hellos = ["Hello mister "+userLname, "Greetings, how are you mister "+userLname, "Good day sir, I am at your service", "Hello, I hope your day has been well", "Hello to you as well mister "+userLname]
				var answer = hellos[Math.floor(Math.random() * hellos.length)]
				if(talk===true){
				say.speak(answer);
				}
				console.log("Jarvis: "+answer);
				
				}
		}

	
	







}



 /**************************************************************************************/
    // module suffix
module.exports = new HelloR();

/**************************************************************************************/