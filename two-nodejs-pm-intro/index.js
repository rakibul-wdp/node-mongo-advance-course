const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({name: 'Larry'}));
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>This is Contact page</p>');
    res.end();
  } else if (req.url == '/about-us') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>This is About Us page</p>');
    res.end();
  }
})

const PORT = 5000;
server.listen(PORT);

console.log(`server is running at ${PORT}`);