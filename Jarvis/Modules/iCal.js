/**************************************************************************************/
// module prefix
var iCal = function() {};

/**************************************************************************************/


iCal.prototype.addevent = function(FQ, nameknown, talk, userLname, username) {
var readline = require('readline-sync');
var say = require('say');
//\\//\\//\\//\\//\\//\\//\\//\\//\\Hello//\\//\\//\\//\\//\\//\\//\\//\\//\\

	

		var event = new icalendar.VEvent('cded25be-3d7a-45e2-b8fe-8d10c1f8e5a9');
event.setSummary("Test calendar event");
event.setDate(new Date(2011,11,1,17,0,0), new Date(2011,11,1,18,0,0));
event.toString();
		
	
	

	
	







}



 /**************************************************************************************/
    // module suffix
module.exports = new iCal();

/**************************************************************************************/