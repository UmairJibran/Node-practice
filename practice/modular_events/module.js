const EventEmitter = require("events");
class Event extends EventEmitter {
  constructor(args) {
    super(args);
    this.on("start", () => {
      this.process();
    });
  }
  process() {
    setTimeout(() => {
      this.emit("complete", { completedOn: new Date() });
    }, 850);
  }
}

module.exports = Event;
