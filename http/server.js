const http = require("http");
const portNumber = 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!\n");
  })
  .listen(portNumber);
console.log(`Server Running at ${portNumber}`);
