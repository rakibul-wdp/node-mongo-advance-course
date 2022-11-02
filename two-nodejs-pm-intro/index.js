const http = require('http');
const fs = require('fs');
console.log(fs);

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>Welcome to Full Stack Development</p>');
    res.end();
  } else if (req.url == '/read') {
    fs.readFile('data.txt', (err, data) => {
      if (err) {
        res.write('Failed to read data...!!!');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    })
  } else if (req.url == '/write') {
    fs.readFile('data.txt', (err, data) => {
      if (err) {
        res.write('Failed to read data...!!!');
        res.end();
      } else {
        res.write(data);
        fs.writeFile('test.txt', data, (err) => {
          if (err) {
            res.write('data failed to write');
            res.end();
          } else {
            res.write('data written successfully');
            res.end();
          }
        })
        res.end();
      }
    })
  } else if (req.url == '/append') {

  } else if (req.url == '/delete') {

  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running on ${PORT}`);