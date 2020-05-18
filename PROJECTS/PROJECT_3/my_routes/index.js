//FILE FOR ORGANIZING ROUTES OF THE SERVER
//Santiago Garcia Arango
//-----------------------------------------------------------------------
//We now organize much better the overall server.js file with this "module"
//(It is important to "export" it and "import" it correctly in "server.js")

//This will use "express" functionalities, so we must require ir first
//(I called this functionality "my_router", but any name should be fine)
const express = require('express');
//We initialize the express functionalities for achieving the "re-directing"
const my_router = express.Router();



//handle GET in the default path of the IP
my_router.get('/', (request,response) => {

    response.send("THIS IS MY FIRST RESPONSE!!!");
    response.status(200);

    //We show that a GET was done (in the terminal)
    //note: the "bgGreen" is used with the "colors" package in our modules (see PROJECT_3_NOTES.txt)
    console.log( "GET done to: '/'".bgGreen );
});


//We export the module, to be able to use it in "server.js" main file (and organize much better the app)
module.exports = my_router;

