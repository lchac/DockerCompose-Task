const http = require("node:http");
const mongoose = require("mongoose");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (_req, res) => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .catch((err) => console.log(err));

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
