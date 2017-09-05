/**************************************************************************************/
// module prefix
var RemindMe = function() {};

/**************************************************************************************/


RemindMe.prototype.remind = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
var fs = require('fs');

//\\//\\//\\//\\//\\//\\//\\//\\//\\Goodbye//\\//\\//\\//\\//\\//\\//\\//\\//\\
if(FQ==="Remind me"){
var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


	remind=true;
	if(talk===true){
				say.speak("Tell me what you need to be reminded for");
				}
	console.log("Jarvis: Tell me what you need to be reminded for");
	var remindthing = readline.question("You: ");
	if(talk===true){
				say.speak("Now tell me the hour and then the minute you need to be reminded");
				}
	console.log("Jarvis: Now tell me the hour and then the minute you need to be reminded");
	var hourRT = readline.question("You(hour): ");
	var minRT = readline.question("You(minute): ");
	
	var hourR = Number(hourRT);
	var minR = Number(minRT);
	
	fs.writeFileSync('./Modules/hourRemind.js', hourR);
	fs.writeFileSync('./Modules/minRemind.js', minR);
	fs.writeFileSync('./Modules/RemindThing.js', remindthing);
	
	if(talk===true){
				say.speak("I will remind you for "+remindthing+" at "+hourRT+":"+minRT);
				}
	console.log("Jarvis: I will remind you for "+remindthing+" at "+hourRT+":"+minRT);
	sleep(3000);
		
}



}	


RemindMe.prototype.remindcheck = function(FQ, nameknown, talk, userLname, username, remind) {


var readline = require('readline-sync');
var say = require('say');
var fs = require('fs');





var hourR = Number(fs.readFileSync('./Modules/hourRemind.js', "utf8"));
var minR = Number(fs.readFileSync('./Modules/minRemind.js', "utf8"));
var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}



	if(hour===hourR && min===minR && remind===true){
	sleep(4000);
	
	var remindthing = fs.readFileSync('./Modules/RemindThing.js', "utf8");

	if(nameknown===false){
	if(talk===true){
	
				say.speak("Hello sir, you told me to remind you for "+remindthing+" at "+hourR+":"+minR);
				}
				console.log("Jarvis: Hello sir, you told me to remind you for "+remindthing+" at "+hourR+":"+minR);
	 fs.writeFileSync('./hourRemind.js', false);
	
				
				}
				
				if(nameknown===true){
				if(talk===true){
				say.speak("Hello mister "+userLname+", you told me to remind you for "+remindthing+" at "+hourR+":"+minR);
				}
				console.log("Jarvis: Hello mister "+userLname+", you told me to remind you for "+remindthing+" at "+hourR+":"+minR);
	 fs.writeFileSync('./hourRemind.js', false);
				
				}
	
	sleep(4000);
	
	}
	}










 /**************************************************************************************/
    // module suffix
module.exports = new RemindMe();

/**************************************************************************************/