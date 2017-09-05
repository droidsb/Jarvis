


/**************************************************************************************/
// module prefix
var PlaySong = function() {};

/**************************************************************************************/


PlaySong.prototype.search = function(FQ) {
var readline = require('readline-sync');
var say = require('say');
var Wiki = require("wikipedia");

//\\//\\//\\//\\//\\//\\//\\//\\//\\Play Music//\\//\\//\\//\\//\\//\\//\\//\\//\\

var iTunesControl = require("itunescontrol");
 
iTunesControl.search(FQ, function (results) {
 
    console.log("RESULTS!", results);
 
    iTunesControl.play(results[0].id);
 
});



}



 /**************************************************************************************/
    // module suffix
module.exports = new PlaySong();

/**************************************************************************************/