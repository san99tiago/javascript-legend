// EXAMPLE OF FETCH-API IN JAVASCRIPT (NEWEST METHOD)
// Santiago Garcia Arango

const fetch = require("node-fetch");

const COOL_URL = "https://jsonplaceholder.typicode.com/todos";
const idNumber = "1";
fetch(`${COOL_URL}/${idNumber}`)
  .then((response) => {
    return response.json(); // return.json() is a promise!
  })
  .then((data) => {
    console.log("Resolved: ", data);
  })
  .catch((err) => {
    console.log("Rejected: ", err);
  });
