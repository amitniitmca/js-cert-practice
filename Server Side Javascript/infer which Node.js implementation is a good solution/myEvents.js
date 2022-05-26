const EventEmitter = require("events");

const object = new EventEmitter();

object.addListener("myevent", () => {
    console.log("This is my custom event");
});

object.emit("myevent");