const http = require('http');
const url = require('url')
const port = 9000;

function responseHandler(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const myURL = url.parse("htp://localhost:9000/test");
    console.log(myURL);
    response.write(myURL.pathname);
    response.end();
}

const server = http.createServer(responseHandler);


server.listen(port);
