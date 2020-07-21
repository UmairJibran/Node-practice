const EventEmitter = require("events");

class Event extends EventEmitter {}

event = new Event();

event.on("dub dub", function () {
  console.log("Suk Ye?");
});
event.on("dub dub", function () {
  console.log("RUK SHA!");
});
event.emit("dub dub");
event.removeAllListeners();
