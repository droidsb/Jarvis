/**************************************************************************************/
// module prefix
var ThanksR = function() {};

/**************************************************************************************/


ThanksR.prototype.thanks = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Goodbye//\\//\\//\\//\\//\\//\\//\\//\\//\\

	if(nameknown===false){
				if(talk===true){
				say.speak("You're very welcome, sir");
				}
	
				console.log("Jarvis: You're very welcome, sir");
				
				}
				
			if(nameknown===true){
			if(talk===true){
				say.speak("You're very welcome mister "+userLname);
				}
				console.log("Jarvis: You're very welcome mister "+userLname);
				
				}

	

	
	







}


 /**************************************************************************************/
    // module suffix
module.exports = new ThanksR();

/**************************************************************************************/