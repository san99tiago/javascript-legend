// EXAMPLE TO CHECK COOL THINGS FROM THE OPERATING SYSTEM WITH OS MODULE
// Santiago Garcia Arango

const os = require("os");

console.log("My system's architecture is: ", os.arch());
console.log("My system's platform is: ", os.platform());
console.log("My CPU's number is: ", os.cpus().length);
console.log("My CPU's models are: ", os.cpus()[0].model);
console.log("My free memory in bytes is: ", os.freemem());
console.log("My home directoy is: ", os.homedir());
console.log("My temp directoy is: ", os.tmpdir());
console.log("My hostname is: ", os.hostname());
// console.log("My network interfaces are: ", os.networkInterfaces());
