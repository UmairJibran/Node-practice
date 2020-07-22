const Event = require("./module.js");
const event = new Event();

event.on("complete", function (details) {
  console.log("Completed at: ", details.completedOn);
});
event.emit("start");
