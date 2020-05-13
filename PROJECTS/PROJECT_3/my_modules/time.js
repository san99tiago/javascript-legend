//MY OWN TIME MODULE 
//Santiago Garcia Arango

//This is how we create a simple time object with the "Date()" internal functionality
var today = new Date();

//Function that returns specific date in the desired string format
function my_date() {
    var date = today.getDate()+'/'+today.getMonth()+ '/' + today.getFullYear();
    return date ;
}
//Then we export the desired functions with the "export" command
exports.my_date = my_date;



