"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080, host: '0.0.0.0' });
let senderSocket = null;
let receiverSocket = null;
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        const message = JSON.parse(data);
        const type = message.type;
        switch (type) {
            case "sender":
                senderSocket = ws;
                break;
            case "receiver":
                receiverSocket = ws;
                break;
            case "createOffer":
                if (ws != senderSocket)
                    return;
                receiverSocket === null || receiverSocket === void 0 ? void 0 : receiverSocket.send(JSON.stringify({ type: "createOffer", sdp: message.sdp }));
                break;
            case "createAnswer":
                if (ws !== receiverSocket)
                    return;
                senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({ type: "createAnswer", sdp: message.sdp }));
                break;
            case "iceCandidate":
                if (ws === senderSocket) {
                    receiverSocket === null || receiverSocket === void 0 ? void 0 : receiverSocket.send(JSON.stringify({
                        type: "iceCandidate",
                        candidate: message.candidate,
                    }));
                }
                else {
                    senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({
                        type: "iceCandidate",
                        candidate: message.candidate,
                    }));
                }
                break;
        }
    });
});
