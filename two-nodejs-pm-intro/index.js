const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Node.js');
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running on ${PORT}`);