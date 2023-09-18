const http = require('http');

const routes = require('./route');

//console.log(routes);
const server = http.createServer(routes);

server.listen(4000);
