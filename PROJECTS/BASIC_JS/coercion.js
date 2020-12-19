// COERCION IN JAVASACRIPT
// Santiago Garcia Arango

// Implicit coercion
console.log("\n-----------EXAMPLE 1-----------")
var test_1 = 10 + "7";
console.log("10 + \"7\" =", test_1);
console.log("typeof(10 + \"7\") =", typeof(test_1));

// Implicit coercion
console.log("\n-----------EXAMPLE 2-----------")
var test_2 = 10 * "7";
console.log("10 * \"7\" =", test_2);
console.log("typeof(10 * \"7\") =", typeof(test_2));

// Explicit coercion
console.log("\n-----------EXAMPLE 3-----------")
var test_3 = String(10) + "!!!";
console.log("String(10) + \"!!!\" =", test_3);
console.log("typeof(String(10) + \"!!!\") =", typeof(test_3));

// Explicit coercion
console.log("\n-----------EXAMPLE 4-----------")
var test_4 = 8 + Number("5");
console.log("8 + Number(\"5\") =", test_4);
console.log("typeof(8 + Number(\"5\")) =", typeof(test_4));
