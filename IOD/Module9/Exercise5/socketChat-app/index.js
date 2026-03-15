const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server); //socket.io instance

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // Notify everyone when a user joins
  io.emit("connection", "a user connected");

  // Notify everyone when a user leaves
  socket.on("disconnect", () => {
    io.emit("connection", "a user disconnected");
  });

  // Handle messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // Typing Functionality
  // Broadcast "{user} is typing" to everyone else
  socket.on("typing", (data) => {
    socket.broadcast.emit("display typing", data);
  });

  // Broadcast to hide the indicator when they stop
  socket.on("stop typing", () => {
    socket.broadcast.emit("hide typing");
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
