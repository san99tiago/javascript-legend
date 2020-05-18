// SERVER APP FOR PROJECT_3
//Santiago Garcia Arango, May 2020

//require my own modules (look at it in directory "my_modules")
const time = require('./my_modules/time');
const fs = require('./my_modules/create_txt');

//require the "express.js" package and initialize it correctly in "app"
const express = require('express')
const app = express();


//handle GET in the default path of the IP
app.get('/', (request,response) => {

    response.send("THIS IS MY FIRST RESPONSE!!!");
    response.status(200);

    //We show that a GET was done (in the terminal)
    console.log("GET done to: '/'");
})








// By this command, we keep the server running (otherwise, it will stop)
//This must be always run at the end of the code
//It is important to notice that the "function(){}" is a callback and helps us send info to terminal
const server = app.listen( 3000 , function() {
    console.log('Listening on http://localhost:' + server.address().port );
    console.log( `${time.my_date()} , ${time.my_time()} , server initialized`);
    fs.create_file( `server initialized, ${time.my_date()} , ${time.my_time()} \n` );
});