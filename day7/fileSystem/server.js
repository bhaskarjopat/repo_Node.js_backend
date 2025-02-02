let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    let content = "<h1> Welcome </h1> <p> This is content message. </p>";
    
    fs.writeFile('abc.html', content, function(err){
        if(err) throw err;
        console.log('Data Saved');
    })

    fs.readFile('abc.html', function (err, data) {
        if(err) throw err;

        response.writeHead('264', {'content-type' : 'text/html'});
        response.write(data);
        response.end();
    })
}).listen(1999);