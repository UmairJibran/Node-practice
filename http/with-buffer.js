const http = require("http");
const url = "http://nodeprogram.com";
http
  .get(url, (res) => {
    let completePage = " ";
    res.on("data", (singleLine) => {
      completePage += singleLine;
    });
    res.on("end", () => {
      console.log(completePage);
    });
  })
  .on("error", (error) => {
    console.log(`The following error has been encountered ${error.message}`);
  });
