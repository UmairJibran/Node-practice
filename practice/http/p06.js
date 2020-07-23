const http = require("http");
const portNumber = 3000;
http
   .createServer((request, response) => {
      console.log(`URL is: ${request.url}`);
      console.log(`Method is: ${request.method}`);
      console.log(`Headers are as follow: `, request.headers);
      if (request.method.toLowerCase() == "post") {
         let buffer = "";
         request.on("data", (data) => {
            buffer += data;
         });
         request.on("end", () => {
            response.end("There was nothing else, just: ", buffer, "\n");
         });
      } else {
         response.writeHead(400, { "Content-Type": "text/html" });
         response.end("Hello World\n");
      }
   })
   .listen(portNumber);
