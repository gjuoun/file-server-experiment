"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = __importDefault(require("dgram"));
const socket = dgram_1.default.createSocket("udp4");
socket.on("message", (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg} - ${rinfo.size}`);
});
socket.bind(8081, () => {
    console.log("UDP running on port 8081");
});
//# sourceMappingURL=udp.js.map