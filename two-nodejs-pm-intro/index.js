const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>Welcome to Full Stack Development</p>');
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running on ${PORT}`);