// FIRST JS SCRIPT IN ORDER TO CREATE A JSON PACKAGE
//Santiago Garcia Arango, May 2020

//First, read the "PROJECT_1_NOTES" to understand this example of JSON package...


//This is how we can export files using the JSON package approach
//We can create functions, attributes and cool stuff to export...
export default {
    //We add a function to our export default file
    MySuperFunction : () => {
        for (var i=0 ; i<6 ; i++) {
            console.log("THIS IS MY SUPER FUNCTION FROM M1");
        }
    },

    //We add a couple of "attributes" to the export file
    my_name : "Santiago Garcia",

    secret_key_wow : "ABRETESESAMO",

    my_age : 20,

};



