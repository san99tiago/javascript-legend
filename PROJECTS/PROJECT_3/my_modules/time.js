//MY OWN TIME MODULE 
//Santiago Garcia Arango

//This is how we create a simple time object with the "Date()" internal functionality
var today = new Date();

//Function that returns specific date in the desired string format
function my_date() {
    var date = today.getDate()+'/'+today.getMonth()+ '/' + today.getFullYear();
    return date ;
}

//Function that returns the specific time at this moment in the desired string format
function my_time() {
    var actual_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return actual_time;
}




//In order to export an object (instead of each function), this is how we do it
const time = {}; //Create object to export
time.my_date = my_date; //Add function to the object
time.my_time = my_time; //Add function to the object


//Then we export the whole object created before
module.exports = time;

