var http = require('http');

function onrequest(request,response){
    response.writeHead(264, {'content-type':'text/plain'});
    response.write('Welcome to Node.js');
    response.end();
}
http.createServer(onrequest).listen(2005);

console.log('Server listen at 2005');