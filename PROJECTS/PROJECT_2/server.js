// WERE ARE GOING TO CREATE OUR FIRST SERVER HERE
//Santiago Garcia Arango, May 2020

console.log("WE ARE GOING TO CREATE OUR FIRST SERVER HERE!!!\n");

//This is how we import the express module, in order to create servers easily
import express from 'express'

//This is the default function to create and initialize a server with express!
const server = express();


//Handle GET events on the server and make a "response" 
//It is important to notice that the route is '/' (after the IP address and port)
server.get('/', (request,response) => {
    //We make a response with a basic message (and the correct status code (200))
    response.send({message: "HELLO FRIENDS, I'M WORKING WITH EXPRESS!"});
    response.status(200);

    //We show that a GET was donde (in the terminal)
    console.log("get donde to '/' ");
})







//By this command, we keep the server running (otherways, it will stop)
//This must be always run at the end of the code
server.listen( 3000 );