const http = require("http");
const portNumber = 3000;

http
   .createServer((request, response) => {
      console.log(`Method is: ${request.method}`);
      console.log(`Header is: `, request.headers);
      console.log(`URL is: ${request.url}`);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("Hello World\n");
   })
   .listen(portNumber);
