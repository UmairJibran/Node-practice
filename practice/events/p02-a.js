const EventEmitter = require("events");

class Event extends EventEmitter {
  constructor(args) {
    super(args);
    this.on("shuruat", () => this.masala());
  }
  masala() {
    this.emit("ikhtetam", { details: new Date() });
  }
}

module.exports = { Event };
