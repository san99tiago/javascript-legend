// ARRAYS IN JAVASACRIPT
// Santiago Garcia Arango

// Create array with specific values
var friends = ["Felipe", "Alejandro"];

// Show array info (and access its specific positions)
console.log("\nInitial friends: ", friends);
console.log("friends.length", friends.length);
console.log("friends[0]: ", friends[0]);
console.log("friends[1]: ", friends[1]);

// Add elements to last position of array
friends.push("Elkin");
friends.push("David");
friends.push("Esteban");
friends.push("Yesid");
friends.push("Andres");

// Add elements to first position of array
friends.unshift("Melissa");
friends.unshift("Laura");
friends.unshift("Camila");

// Show array info (and access its specific positions)
console.log("\nNew friends: ", friends);
console.log("friends.length", friends.length);

// Delete last array element
friends.pop();

// Delete first array element
friends.shift();

// Show array info (and access its specific positions)
console.log("\nFinal friends: ", friends);
console.log("friends.length", friends.length);

// Get position of first specific given value in array
index_of_meli = friends.indexOf("Melissa");
console.log("\nfriends.indexOf(\"Melissa\") = ", index_of_meli);
console.log("friends[index_of_meli] = ", friends[index_of_meli])
