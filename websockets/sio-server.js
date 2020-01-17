const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app).listen(3000);
const io = require("socket.io")(server);

app.use(express.static("./"));

io.on("connection", function (socket) {
  
  socket.on("chat", function (message) {
    socket.broadcast.emit("message", message);
  });
  
  socket.emit("message", "Welcome to Cyber Chat");
  
});

console.log("Starting Socket App - http://localhost:3000");