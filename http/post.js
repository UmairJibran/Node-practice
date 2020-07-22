//requires from Core Node
const fs = require("fs");
const http = require("http");
const path = require("path");
//variables
var jsonToWrite = "";
//
fs.readFileSync(
  path.join(__dirname, "users.json"),
  { encoding: "utf-8" },
  (error, data) => {
    if (error) return console.error(error);
    myJSON = JSON.stringify(data);
    jsonToWrite += myJSON;
  }
);
// setTimeout(() => {
const options = {
  hostname: "mockbin.com",
  port: 80,
  path: "/request?foo=bar&foo=baz",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(jsonToWrite),
  },
};
const req = http.request(options, (res) => {
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("end", () => {
    console.log("Every thing has been logged");
  });
  res.on("error", (error) => {
    console.error(error.message);
  });
});
req.write(jsonToWrite);
req.end();
// }, 500);
