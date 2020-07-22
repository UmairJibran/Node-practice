const portNumber = 3000;
const http = require("http");
http
  .createServer((request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello World");
  })
  .listen(portNumber);

console.log(`Listening on Port ${portNumber}`);
