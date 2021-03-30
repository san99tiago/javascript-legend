// MULTIPLE LOW-LEVEL BUFFERS IN JAVASCRIPT
// Santiago Garcia Arango

// Allocate new buffer of the given octate size
let buffer = Buffer.alloc(5);
console.log(buffer);

// Create buffer based on passed array
buffer = Buffer.from([1, 2, 3]);
console.log(buffer);

// Create buffer based on given "char" or "array of chars"(string)
buffer = Buffer.from("a");
console.log(buffer);

// Create buffer for the alphabet ('a', 'b', 'c', 'd', ... , 'y', 'z')
let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc); // Show alphabet in hexidecimal's format
console.log(abc.toString()); // Show alphabet in character's format
