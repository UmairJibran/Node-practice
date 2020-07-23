const Event = require("./p02-a.js");
let event = new Event.Event();

event.on("ikhtetam", (details) => {
  console.log("Yeh kaam is waqt ikhtetam pazir paaya: ", details.details);
});

event.emit("shuruat");
