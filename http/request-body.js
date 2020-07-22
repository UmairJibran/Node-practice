const http = require("http");
const portNumber = 3000;
http
  .createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.statusCode);
    if (request.method.toLowerCase() == "post") {
      console.log("IT WAS POST!\n");
      let buffer = "";
      request.on("data", (chunk) => {
        buffer += chunk;
      });
      request.on("end", () => {
        console.log(`Body: ${buffer}`);
        response.end("Nothing ELSE!\n");
      });
    } else {
      console.log("IT WAS GET!\n");
      response.writeHead("200", { "Content-Type": "text/html" });
      response.end("Hello World\n");
    }
  })
  .listen(portNumber);
