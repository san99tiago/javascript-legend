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

const getFromApi = async () => {
  const data1 = await fetchData(URL_API);
  const { count } = data1.info;
  const { id } = data1.results[0];

  const data2 = await fetchData(`${URL_API}/${id}`);
  const { name } = data2;
  const { url } = data2.origin;

  const data3 = await fetchData(url);
  const { dimension } = data3;

  console.log(URL_API);
  console.log(count);

  console.log(URL_API + data1.results[0].id);
  console.log(name);

  console.log(data2.origin.url);
  console.log(dimension);
};
getFromApi();
