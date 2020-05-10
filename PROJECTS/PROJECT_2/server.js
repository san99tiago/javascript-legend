// WERE ARE GOING TO CREATE OUR FIRST SERVER HERE

console.log("WE ARE GOING TO CREATE OUR FIRST SERVER HERE!!!\n");


//We import the functionality of "http" (from the "node.js" module)
import http from 'http'

//Create a new server (this is from the "node.js" module imported before)
const server = http.createServer();







//By this command, we keep the server running (otherways, it will stop)
server.listen( 3000 );

