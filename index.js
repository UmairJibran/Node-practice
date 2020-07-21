//Understanding Require and Exports
const addNumbers = require("./module.js");
console.log(addNumbers.sum([4, 5, 5, 6, 1, 4]));

//Working on Core Modules
const path = require("path"); //requires PATH Module from the Core Node Modules
const fs = require("fs"); //requires File System module from the Core Node Modules
//Writing to a File
let email = "umairjibran7@gmail.com";
fs.writeFile("emails.txt", email, function (error) {
  if (error) return console.log(error);
  else console.log("Email Written!");
});

//Reading from a file
fs.readFile(
  path.join(__dirname, "/emails.txt"),
  { encoding: "utf-8" },
  function (error, data) {
    if (error) return console.log(error);
    else console.log(data);
  }
);

//Studying Event Emitter
const EventEmitter = require("events");

class Job extends EventEmitter {}

let job = new Job();

job.on("ushu", function (timeDone) {
  console.log("Sta da kaar taqreeban ", timeDone, " ushu");
});

job.emit("ushu", new Date());
