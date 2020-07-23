const http = require("http");
const url = "http://nodeprogram.com";
http.get(url, (response) => {
  response.on("data", (data) => {
    console.log(data.toString("utf-8"));
  });
});
