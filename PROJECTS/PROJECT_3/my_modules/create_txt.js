//MY OWN CREATE "TXT" MODULE 
//Santiago Garcia Arango

//This is how we use FileSystem module (for interacting with system files from NODEJS)
const fs = require("fs");



//Function that allows us to create a file in the actual directory if it doesn't exists yet
//(First parameter: name of the file that we create)
//(Second parameter: data to write)
//(Third parameter: callback)
function create_file() {
    fs.writeFile("./servers_inits/my_cool_info.txt", null, function() {

    });
}

//Function that returns the specific time at this moment in the desired string format
function my_time() {
    var actual_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return actual_time;
}




//In order to export an object (instead of each function), this is how we do it
const fs = {}; //Create object to export
fs.my_date = my_date; //Add function to the object
time.my_time = my_time; //Add function to the object


//Then we export the whole object created before
module.exports = time;