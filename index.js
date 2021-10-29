let http = require('http');
let fs = require('fs');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
    fs.appendFile('log.txt', 'A request was received\n', (err) => {
        response.writeHead(200);
        response.end();
    });
}