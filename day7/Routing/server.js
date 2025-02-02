let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (request, response) {
    let path = url.parse(request.url).pathname;
    console.log(path);
    
    switch (path) {
        case '/':
            renderHTML('./bindex.html', response);
            break;
            case '/service':
            renderHTML('./service.html', response);
            break;
            case '/login':
            renderHTML('./login.html', response);
            break;
            case '/about':
            renderHTML('./about.html', response);
            break;
        default:
            response.writeHead(404);
            response.write('Page not found');
            response.end();
    }

}).listen(1983);
console.log('Server listening on PORT: 1983');


function renderHTML(path,response) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else{
            response.writeHead('264', {'Content-Type':'text/html'});
            response.write(data);
        }
        response.end();
    })
}