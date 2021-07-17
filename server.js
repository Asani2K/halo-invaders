const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const port = 8081;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// Serve static resources
app.use(express.static(__dirname + "/client/"));
app.use(express.static(__dirname + "/node_modules/"));

app.get("/", (req, res) => {
  const stream = fs.createReadStream(__dirname + "/client/index.html");
  // const stream = fs.createReadStream(__dirname + "/client/game.html");
  stream.pipe(res);
});