// EXAMPLES OF PROMISES WITH REQUESTS IN JAVASCRIPT
// Santiago Garcia Arango

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

const COOL_URL = "https://jsonplaceholder.typicode.com/todos/";

const getToDos = (idNumber) => {
  return new Promise((resolve, reject) => {
    // Main event listener to know when the request is ready
    request.addEventListener("readystatechange", () => {
      // "readyState === 4" --> means that the data is now back
      if (request.readyState === 4 && request.status === 200) {
        // Parse the data that was achieved from the request, into JSON
        const data = JSON.parse(request.responseText);
        // Pass the data ("undefined" is because the was not error)
        resolve(data);
      } else if (request.readyState === 4) {
        // Pass the error ("undefined" is because the was not data found)
        reject("Could fetch the data correctly.");
      }
    });

    let todoId = String(idNumber);
    request.open("GET", `${COOL_URL}/${todoId}`);
    request.send();
  });
};

// Try out the promise (change the parameter (1-200 is ok), (>200 is error))
getToDos(1)
  .then((data) => {
    console.log(data);
    console.log("--> Here we would do something cool with the data!");
  })
  .catch((err) => {
    console.log(err);
  });
