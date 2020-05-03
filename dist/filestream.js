"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
// let stream = fs.createReadStream(path.join(__dirname, "data.txt"));
// stream.on("data", function (data) {
// var chunk = data.toString();
// console.log("chunk", chunk);
// }); 
// let stream = fs.createWriteStream(path.join(__dirname, "data.txt"))
// stream.write("Tutorial on Node j1 \n")
// stream.write("Tutorial on Node j2 \n")
// stream.write("Tutorial on Node j3 \n")
// stream.write("Tutorial on Node j4 \n")
const eventEmitter = events_1.default.EventEmitter;
const emitter = new eventEmitter();
emitter.on('data_received', function (...args) {
    console.log(args);
    console.log('Data received successfully.');
});
emitter.on('data_received', function (...args) {
    console.log(args);
    console.log('Data received successfully.');
});
emitter.emit("data_received", { name: "jun" });
emitter.emit("data_received", { name: "jun" });
console.log(eventEmitter.listenerCount(emitter, "data_received"));
//# sourceMappingURL=filestream.js.map