let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('./user.json', "utf-8", function (err, data) {
        data = JSON.parse(data);
        response.end(JSON.stringify(data));
    })
    response.writeHead('264', {"content-type": 'application/json'});

    // let myObj = {id: 202, name: 'ram', age: 25};

    // response.end(JSON.stringify(myObj));
}).listen(1998);
console.log('Server listening on PORT: 1998');