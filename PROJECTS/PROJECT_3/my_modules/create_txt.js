//MY OWN CREATE "TXT" MODULE 
//Santiago Garcia Arango

//This is how we use FileSystem module (for interacting with system files from NODEJS)
const fs = require("fs");



//Function that allows us to create a file in the actual directory if it doesn't exists yet
//(First parameter: name of the file that we create)
//(Second parameter: data to write)
//(Third parameter: callback-->function that "receives" error when ending file operation)
function create_file() {
    fs.writeFile("./servers_inits/my_cool_info.txt", null, function(err) {
        
        //This is how we check if there were errors in the "callback"
        if (err){
            console.log(err);
        }

        //If everything was ok (NO errors)
        console.log("TXT file process was ok!!!");


    });
}



//In order to export an object (instead of each function), this is how we do it
const fs = {}; //Create object to export
fs.create_file = create_file; //Add function to the object

//Then we export the whole object created before
module.exports = fs;