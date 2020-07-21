const Event = require("./modular_events.js");
let event = new Event();

event.on("complete", function (details) {
  console.log("The task was completed on: ", details.completedOn);
});

event.emit("begin");
