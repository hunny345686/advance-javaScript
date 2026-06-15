const express = require("express");
const WebSocket = require("ws");

const app = express();

app.use(express.static("public"));

const server = app.listen(4000, () => {
    console.log("Server running");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
    // console.log("Client connected", socket);

    socket.on("message", (message) => {
        console.log("Received message:", message.toString());
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});