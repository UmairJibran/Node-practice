const url =
  "https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt";
const https = require("https");
const fs = require("fs");

https
  .get(url, (res) => {
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => writeToFile(rawData));
    res.on("error", (error) => {
      console.error(
        `The following error has been encountered ${error.message}`
      );
    });
  })
  .on("error", (error) => {
    console.error(`The following error has been encountered ${error.message}`);
  });

function writeToFile(data) {
  fs.writeFile("./users.json", data, (error) => {
    if (error) return console.error(error);
    console.log("Data has been written to users.json");
  });
}
