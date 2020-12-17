// SERVER APP FOR PROJECT_3
//Santiago Garcia Arango, May 2020

//require my own modules (look at it in directory "my_modules")
const time = require('./my_modules/time');
const fs = require('./my_modules/create_txt');


//require the "colors" package (cool module to enable colors for the "console.log(---) in terminal")
const colors = require('colors');


//require the "express" package and initialize it correctly in "app"
const express = require('express')
const app = express();


//For being organized and make a prettier code, we must "modularize" our routes...
//We are creating all the routes processing in <my_routes>/index.js file (look at it for details)
app.use( require('./my_routes/index') );








// By this command, we keep the server running (otherwise, it will stop)
//This must be always run at the end of the code
//It is important to notice that the "function(){}" is a callback and helps us send info to terminal
const server = app.listen( 3000 , function() {
    //When "starting the server", show info and use functionalities of <my_modules>
    console.log( ('Listening on http://localhost:' + server.address().port).bgBlue );
    console.log( `${time.my_date()} , ${time.my_time()} , server initialized`.bgYellow);

    //Create register of the server initialized (using <my_modules>/create_file.js)
    fs.create_file( `server initialized, ${time.my_date()} , ${time.my_time()} \n` );
});