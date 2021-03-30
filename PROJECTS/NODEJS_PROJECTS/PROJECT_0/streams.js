// SIMPLE STREAMS IN JAVASCRIPT
// Santiago Garcia Arango

const fs = require("fs");

// This is how we can write an stream with a low-level approach
process.stdout.write("Hello");
process.stdout.write(" ");
process.stdout.write("this");
process.stdout.write(" ");
process.stdout.write("is");
process.stdout.write(" ");
process.stdout.write("how");
process.stdout.write(" ");
process.stdout.write("we");
process.stdout.write(" ");
process.stdout.write("can");
process.stdout.write(" ");
process.stdout.write("writte");
process.stdout.write(" ");
process.stdout.write("streams");
process.stdout.write(" ");
process.stdout.write("as");
process.stdout.write(" ");
process.stdout.write("buffers");
process.stdout.write("\n");

// This is how we can read a file with a stream approach
let data = "";
let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf8");
readableStream.on("data", function (chunk) {
  data = data + chunk;
  console.log(chunk);
});
