const http = require("node:http");
const db = require("./db");

const hostname = "0.0.0.0";
const port = 3000;
let dbStatus = "-";

const server = http.createServer(async (_req, res) => {
  const now = new Date();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello, World!\nDB Status: ${dbStatus}\nTime: ${now.toISOString()}`);
});

server.listen(port, hostname, async () => {
  dbStatus = await db.connect();
  console.log(`Server running at http://localhost:${port}/`);
});
