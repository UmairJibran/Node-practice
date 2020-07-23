const EventEmitter = require("events");

class Event extends EventEmitter {}

let event = new Event();

event.on("ulamba", function () {
  console.log("Alak Ulambal pa: ", new Date());
});

event.emit("ulamba");
