const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const address_url = 'http://localhost:5000/contact?name=omok&country=tomok';

  const parsed_url = url.parse(address_url, true)
  
  const queryObject = parsed_url.query

  console.log(queryObject);

})

console.log(url);

const PORT = 5000;
server.listen(PORT);

console.log(`server is running at ${PORT}`);