//Studying Event Emitter
const EventEmitter = require("events");

class Job extends EventEmitter {}

let job = new Job();

job.on("ushu", function (timeDone) {
   console.log("Sta da kaar taqreeban ", timeDone, " ushu");
});

job.emit("ushu", new Date());

job.removeAllListeners();
