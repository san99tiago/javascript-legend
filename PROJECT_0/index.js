// FIRST JS SCRIPT BASED ON NODEJS ENVIRONMENT
//Santiago Garcia Arango, May 2020

//Important note:
//To execute this file, you must write in the terminal: >>node index.js


//Everything is based on JS, but the thing that is important is the "process" or "way" to...
//...connect JS commands with the actual environment.


//-----------------TWO WAYS OF INTERACTING WITH THE CONSOLE/TERMINAL--------------------------

//The following line works like this (LOW-LEVEL PROGRAMMING/API):
//A)  JavaScript -->  ( Math.random().toString() )
//B)  Node API   -->  ( process.stdout.write(____) )
process.stdout.write( Math.random().toString() );

console.log("\n--------------------"); //Simple "breakline" to separate both console outputs

//The easiest way to achieve the last expression is to use (HIGH-LEVEL-PROGRAMMING/API):
console.log( Math.random() );




//-------------------SOME COOL FUNCTION (  <3   )-----------------------------------------------
//This simple funciton can recieve any ammount of arguments and shows them in the console
function SANTI() {
    // "arguments" is a unique word to understand the inputs of the function
    console.log("Arguments of the function called:");
    console.log( arguments );
}
//Now we test the function with some random arguments
SANTI( "HELLO" , "HOLA" , "HALLO" ,"BONJOUR" , "NIHAO" , "OLA" );




//----------------------NOW WE CREATE EXPORTS----------------------------------------------------
//This general purppose class is used in order to "export" things to other JS files
//We create a couple of things to export to "index2.js" file
//It is important to notice that both "module.exports.<whateverr>" and "exports.<whatever>" do the same
module.exports.first_thing = "something";   //First way
exports.second_thing = "something_cooler";  //Second way

//This final approach is to create a "FUNCTION" that can be called multiple times from "index2.js"
module.exports.MySuperFunction = () => {
    console.log("FUNCTION FROM INDEX.JS");
}