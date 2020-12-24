// VARIABLES IN JAVASACRIPT
// Santiago Garcia Arango

// Important remark: it's a better approach to define variables with "let", ...
// ... because this will create the memory in the specific current scope.

// Declare variables (only initialized)
var user_id;

// Add data to those initialized variables
var user_id = "111111111";

// Create variables with specific values given
var user_name = "Santiago";
var user_lastname = "Garcia";
var user_age = 21;

// Create variable of "array" type
var information_array = [user_name, user_lastname, user_age, user_id]

// Create variables of "object" type
var information_object = {
    user_name: user_name,
    user_lastname: user_lastname,
    user_age: user_age,
    user_id: user_id
}

// Show variables
console.log("\n----------------SHOW OUR VARIABLES----------------\n")
console.log("user_name: ", user_name, "\n")
console.log("user_lastname: ", user_lastname, "\n")
console.log("user_age: ", user_age, "\n")
console.log("user_id: ", user_id, "\n")
console.log("information_array: ", information_array, "\n")
console.log("information_object: ", information_object, "\n")
