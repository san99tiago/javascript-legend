// EXAMPLE OF ASYNC-AWAIT USING THE FETCH-API IN JAVASCRIPT
// Santiago Garcia Arango

const fetch = require("node-fetch");

const COOL_URL = "https://jsonplaceholder.typicode.com/todos";
const idNumber = "1";

const getToDos = async () => {
  const response = await fetch(`${COOL_URL}/${idNumber}`);

  // With fetch module, the default errors are network of json errors...
  // We must add the wrong status-code error manually like this:
  if (response.status !== 200) {
    throw new Error("--> Can not fetch the data.");
  }

  const data = await response.json();
  return data;
};

getToDos()
  .then((data) => {
    console.log("Resolved: ", data);
  })
  .catch((err) => {
    console.log("Rejected: ", err);
  });
