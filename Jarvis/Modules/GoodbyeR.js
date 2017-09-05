/**************************************************************************************/
// module prefix
var GoodbyeR = function() {};

/**************************************************************************************/


GoodbyeR.prototype.GbyeR = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Goodbye//\\//\\//\\//\\//\\//\\//\\//\\//\\

			if(nameknown===false){
			
			if(talk===true){
				say.speak("Goodbye sir");
				}
			console.log("Jarvis: Goodbye sir");
			
			}
			if(nameknown===true){
			
			
			var goodbyes = ["Goodbye mister "+userLname, "I'll see you later mister "+userLname, "Take care sir", "I'll be waiting here for you sir"]
			var answer = goodbyes[Math.floor(Math.random() * goodbyes.length)]
			
			
			if(talk===true){
				say.speak(answer);
				}
			console.log("Jarvis: "+answer);
				
				
			}

	

	
	







}


 /**************************************************************************************/
    // module suffix
module.exports = new GoodbyeR();

/**************************************************************************************/