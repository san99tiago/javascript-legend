let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

// Main event listener to now when the request is ready
request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText)
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
