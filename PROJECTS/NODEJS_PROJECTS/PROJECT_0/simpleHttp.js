// SIMPLE LEGACY HTTP USAGE (NOWDAYS WE SHOULD USE EXPRESS INSTEAD)
// Santiago Garcia Arango

const http = require("http");
const PORT = 3000;

http.createServer(router).listen(PORT);

function router(req, res) {
  console.log("--New request executed--");
  console.log(req.url);

  if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello my friends, I'm Santiago Garcia!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error 404, page not found in this awesome sever");
  }
  res.end();
}

console.log(`Listening on ${PORT}`);
