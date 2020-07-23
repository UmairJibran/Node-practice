const https = require("https");
const url =
   "https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt";

https.get(url, (response) => {
   let buffer = " ";
   response.on("data", (data) => {
      try {
         buffer += data.toString("utf-8");
      } catch (exception) {
         console.log(exception.toString("utf-8"));
      }
   });
   response.on("end", function () {
      console.log(buffer);
   });
});
