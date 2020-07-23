const http = require("http");
const portNumber = 3000;

http
   .createServer((request, response) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("Hello World\n");
   })
   .listen(portNumber);
