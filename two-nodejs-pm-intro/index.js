// local module
const { add } = require("./other");

// core modules
const http = require('http');

// third party module -> underscore
const _= require('underscore');

const server = http.createServer(function(req, res) {
  // console.log(`server is running`);
});
server.listen(5000);

// const result = add(2, 3);

// console.log(result);

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

const res = _.pluck(stooges, 'age');

console.log(res);