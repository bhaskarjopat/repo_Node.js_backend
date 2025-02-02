let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('./hindex.html', function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write('Page not found');
        } else {
            response.writeHead('264', {'content-type':'text/html'});
            response.write(data);
            response.end();
        }
    })
}).listen(1990);
console.log('Server listening on PORT: 1990');