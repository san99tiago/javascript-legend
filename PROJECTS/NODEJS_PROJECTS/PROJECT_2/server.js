// WERE ARE GOING TO CREATE OUR FIRST SERVER HERE
//Santiago Garcia Arango, May 2020


//This is how we import the express module, in order to create servers easily
//(if we use "import" method):   "  import express from 'express' ""
const express = require('express')

//This is the default function to create and initialize a server (app) with express!
const app = express();


//Handle GET events on the server(app) and make a "response" 
//It is important to notice that the route is '/' (after the IP address and port)
app.get('/', (request,response) => {
    //We make a response with a basic message (and the correct status code (200))
    response.send("THIS IS MY FIRST RESPONSE!!!");
    response.status(200);

    //We show that a GET was donde (in the terminal)
    console.log("get done to '/' ");
})


//This is another way to handle de GET events
app.get('/test_1', function(req,res,next) {
    //We make a response with a basic message (and the correct status code (200))
    res.send("THIS IS MY TEST_1 RESPONSE!!");
    res.status(200);

    //We show that a GET was donde (in the terminal)
    console.log("get done to '/test_1' ");
})







//By this command, we keep the server running (otherways, it will stop)
//This must be always run at the end of the code
//It is important to notice that the "function(){}" is a callback and helps us send info to terminal
const server = app.listen( 3000 , function() {
    console.log('Listening on http://localhost:' + server.address().port );
});