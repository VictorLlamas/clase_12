const http = require('http');
const port = 8000;

function responseHandler(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('OK ');
    response.write('Hello world!');
    console.log(request.method);
    console.log(request.url);
    response.end();
}

const server = http.createServer(responseHandler);

server.listen(port);