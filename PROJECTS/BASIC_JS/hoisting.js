// HOISTING IN JAVASACRIPT
// Santiago Garcia Arango

// Normal variable declaration
var my_name_1;
my_name_1 = "Santiago_1";
console.log("\n", my_name_1);

// Hoisting variable declaration
console.log("\n", my_name_2);
var my_name_2 = "Santiago_2"

// Normal function declaration
function my_function_1() {
    return "\nYou called <my_function_1>\n";
}
console.log(my_function_1());

// Hoisting function declaration
console.log(my_function_2());
function my_function_2() {
    return "\nYou called <my_function_2>\n";
}
