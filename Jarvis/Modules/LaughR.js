/**************************************************************************************/
// module prefix
var LaughR = function() {};

/**************************************************************************************/


LaughR.prototype.laugh= function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Laugh//\\//\\//\\//\\//\\//\\//\\//\\//\\

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();




			if(nameknown===false){
			var haha = ["Very funny sir", "That makes me metaphorically laugh", "Yes that is quite funny"]
		var answer = haha[Math.floor(Math.random() * haha.length)]
		if(talk===true){
				say.speak(answer);
				}
	console.log("Jarvis: "+answer);
				
				}
				
				if(nameknown===true){
				
				var haha = ["Very funny sir", "That makes me metaphorically laugh", "Yes that is quite funny", "Another joke mister "+userLname+"?"]
		var answer = haha[Math.floor(Math.random() * haha.length)]
				
					if(talk===true){
				say.speak(answer);
				}
					console.log("Jarvis: "+answer);
				}
		
	
	}
	
	
	
		
		
			

	


	










 /**************************************************************************************/
    // module suffix
module.exports = new LaughR();

/**************************************************************************************/