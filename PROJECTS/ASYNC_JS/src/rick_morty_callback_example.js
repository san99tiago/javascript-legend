// EXAMPLES OF CALLBACKS WITH REQUESTS TO RICK-MORTY API IN JAVASCRIPT
// Santiago Garcia Arango

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let api = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error("Error: " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(api, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(api + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);

      console.log(api);
      console.log(data1.info.count);

      console.log(api + data1.results[0].id);
      console.log(data2.name);

      console.log(data2.origin.url);
      console.log(data3.dimension);
    });
  });
});
