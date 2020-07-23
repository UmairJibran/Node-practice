const http = require("http");
const url = "http://nodeprogram.com";

http.get(url, (response) => {
   let buffer = " ";
   response.on("data", (chunk) => {
      buffer += chunk.toString("utf-8");
   });
   response.on("end", () => {
      console.log(buffer);
   });
});
