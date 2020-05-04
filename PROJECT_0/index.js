// FIRST JS SCRIPT BASED ON NODEJS ENVIRONMENT
//Santiago Garcia Arango, May 2020


//Everything is based on JS, but the thing that is important is the "process" or "way" to...
//...connect JS commands with the actual environment.


//-----------------TWO WAYS OF INTERACTING WITH THE CONSOLE/TERMINAL--------------------------

//The following line works like this (LOW-LEVEL PROGRAMMING/API):
//A)  JavaScript -->  ( Math.random().toString() )
//B)  Node API   -->  ( process.stdout.write(____) )
process.stdout.write( Math.random().toString() );

//The easiest way to achieve the last expression is to use (HIGH-LEVEL-PROGRAMMING/API):
console.log( Math.random() )