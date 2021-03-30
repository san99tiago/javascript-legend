let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const URL_API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error " + url_api));
      }
    };
    xhttp.send();
  });
};

fetchData(URL_API)
  .then((data1) => {
    console.log(URL_API);
    console.log(data1.info.count);
    console.log(URL_API + data1.results[0].id);
    return fetchData(`${URL_API}${data1.results[0].id}`);
  })
  .then((data2) => {
    console.log(data2.name);
    console.log(data2.origin.url);
    return fetchData(data2.origin.url);
  })
  .then((data3) => {
    console.log(data3.dimension);
  })
  .catch((err) => {
    console.log(err);
  });
