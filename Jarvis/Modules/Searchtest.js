var Search = require('./Search.js');
var readline = require('readline-sync');
var FQ = readline.question("You: ");
Search.searchwiki(FQ);
