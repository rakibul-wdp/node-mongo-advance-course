// local module
const other = require("./other");

// const res = other.subtract(5, 4);
// console.log(res);

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello node.js');
})

const PORT = 5000;
server.listen(PORT);

console.log(`server is running at ${PORT}`);