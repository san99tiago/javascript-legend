let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

const COOL_URL = "https://jsonplaceholder.typicode.com/todos/";

const getToDos = (callback) => {
  // Main event listener to know when the request is ready
  request.addEventListener("readystatechange", () => {
    // "readyState === 4" --> means that the data is now back
    if (request.readyState === 4 && request.status === 200) {
      // Parse the data that was achieved from the request, into JSON
      const data = JSON.parse(request.responseText);
      // Pass the data ("undefined" is because the was not error)
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // Pass the error ("undefined" is because the was not data found)
      callback("Could fetch the data correctly.", undefined);
    }
  });

  let todoId = "1";
  request.open("GET", `${COOL_URL}/${todoId}`);
  request.send();
};

console.log("1");
console.log("2");

getToDos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("3");
console.log("4");
