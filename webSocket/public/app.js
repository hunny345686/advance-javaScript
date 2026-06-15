const socket = new WebSocket(
    "ws://localhost:4000"
);

const input = document.getElementById("messageInput");

const btn = document.getElementById("sendBtn");

const messages = document.getElementById("messages");

socket.onopen = () => {
    console.log("Connected");
};

socket.onmessage = (event) => {
    const li = document.createElement("li");
    console.log("Received message:", event);
    li.textContent = event.data;

    messages.appendChild(li);
};

socket.onclose = () => {
    console.log("Disconnected");
};

btn.addEventListener("click", () => {
    socket.send(input.value);

    input.value = "";
});