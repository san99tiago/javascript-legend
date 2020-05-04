//SECOND JS SCPRIT IN THIS JSON PACKAGE
//Santiago Garcia Arango, May 2020

//First, read the "PROJECT_1_NOTES" to understand this example of JSON package...
//to run:
// >>node --experimental-modules m2.js


//In order to import "m1.js" file, we must use "import <filename_to_import> from <where_it_is>"
//note: when we say from "./______" it means that the file is located where we are (same directory)
import m1 from './m1.js';


m1.MySuperFunction();
console.log( m1.my_name );
console.log( m1.my_age );
console.log( m1.secret_key_wow );
