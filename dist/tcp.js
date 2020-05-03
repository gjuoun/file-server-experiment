"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const server = net_1.default.createServer((socket) => {
    console.log('its running');
    socket.write('Hello');
    socket.on("data", (data) => {
        console.log(data.toString());
    });
});
server.listen(8080);
//# sourceMappingURL=tcp.js.map