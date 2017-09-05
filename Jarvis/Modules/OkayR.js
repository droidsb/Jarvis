/**************************************************************************************/
// module prefix
var OkayR = function() {};

/**************************************************************************************/


OkayR.prototype.okay = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Hello//\\//\\//\\//\\//\\//\\//\\//\\//\\

	

		var okayR = ["Quite right", "Indeed", "Undoubtedly", "Alright"]
				var answer = okayR[Math.floor(Math.random() * okayR.length)]	
	if(talk===true){
				say.speak(answer);
				}
	
		console.log("Jarvis: "+answer);
		
	
	

	
	







}



 /**************************************************************************************/
    // module suffix
module.exports = new OkayR();

/**************************************************************************************/