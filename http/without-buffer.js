const http = require("http");
const url = "http://nodeprogram.com";
http
  .get(url, (res) => {
    res.on("data", (chunk) => {
      setTimeout(() => {
        console.log(chunk.toString("utf-8"));
      }, 0);
    });
    res.on("end", function () {
      console.log("Code has ended");
    });
  })
  .on("error", (error) => {
    console.log(error.message);
  });
