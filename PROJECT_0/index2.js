//ACCESSING OTHER JS FILE AND ITS DIFFERENT APPROACHES
//Santiago Garcia Arango, May 2020

//When obtaining other file using "exports" way, then we must understand that...
//...we can "call" the other file to execute directly, or to strategically access...
//...some atributtes or functions from it.



//----------------------ACQUIRING THE OTHER FILE TO DIRECTLY EXECUTE IT-------------------
//this is how we get access to "execute" a file specified (relative path)
require('./index.js');
console.log("\nDONE EXECUTING FIRST FILE!!\n");
//However, this approach is NOT the best, the next way gives us more control over things




//----------------------ACQUIRING THE OTHER FILE TO EXECUTE WHAT WE WANT-------------------
//Now we show the "exports" from the first file (but with more control over them)
console.log("NOW WE ACCESS TO ITS <EXPORTS> TO SHOW THEM STRATEGICALLY:");

//We create a variable called "info" to acquire it exported elements
const info = require('./index.js');
console.log(info.first_thing);
console.log(info.second_thing);


//This is how we can actually run the "exports" function created in "index.js"
info.MySuperFunction();


//Finally, this is how the whole "exports" obtained from the "index.js" file looks like:
console.log("\nTHIS IS HOW THE EXPORTS OBTAINED LOOK LIKE:");
console.log(info);